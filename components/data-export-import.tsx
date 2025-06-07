"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Upload, FileText, AlertCircle, CheckCircle } from "lucide-react"

interface ExportData {
  habits: any[]
  profile: any
  exportDate: string
  version: string
}

export function DataExportImport() {
  const [importData, setImportData] = useState("")
  const [importStatus, setImportStatus] = useState<"idle" | "success" | "error">("idle")
  const [importMessage, setImportMessage] = useState("")
  const [isExportOpen, setIsExportOpen] = useState(false)
  const [isImportOpen, setIsImportOpen] = useState(false)

  const exportData = () => {
    try {
      const habits = JSON.parse(localStorage.getItem("icanquit-habits") || "[]")
      const profile = JSON.parse(localStorage.getItem("icanquit-profile") || "{}")

      const exportData: ExportData = {
        habits,
        profile,
        exportDate: new Date().toISOString(),
        version: "1.0.0",
      }

      const dataStr = JSON.stringify(exportData, null, 2)
      const dataBlob = new Blob([dataStr], { type: "application/json" })
      const url = URL.createObjectURL(dataBlob)

      const link = document.createElement("a")
      link.href = url
      link.download = `icanquit-backup-${new Date().toISOString().split("T")[0]}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setIsExportOpen(false)
    } catch (error) {
      console.error("Export failed:", error)
      alert("Failed to export data. Please try again.")
    }
  }

  const importDataFromFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      setImportData(content)
    }
    reader.readAsText(file)
  }

  const validateAndImportData = () => {
    try {
      setImportStatus("idle")
      setImportMessage("")

      if (!importData.trim()) {
        setImportStatus("error")
        setImportMessage("Please provide data to import")
        return
      }

      const data: ExportData = JSON.parse(importData)

      // Validate data structure
      if (!data.habits || !Array.isArray(data.habits)) {
        throw new Error("Invalid data format: habits array missing")
      }

      // Backup current data
      const currentHabits = localStorage.getItem("icanquit-habits")
      const currentProfile = localStorage.getItem("icanquit-profile")

      if (currentHabits) {
        localStorage.setItem("icanquit-habits-backup", currentHabits)
      }
      if (currentProfile) {
        localStorage.setItem("icanquit-profile-backup", currentProfile)
      }

      // Import new data
      localStorage.setItem("icanquit-habits", JSON.stringify(data.habits))

      if (data.profile && Object.keys(data.profile).length > 0) {
        localStorage.setItem("icanquit-profile", JSON.stringify(data.profile))
      }

      setImportStatus("success")
      setImportMessage(
        `Successfully imported ${data.habits.length} habits and profile data from ${new Date(data.exportDate).toLocaleDateString()}`,
      )

      // Refresh page after successful import
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      setImportStatus("error")
      setImportMessage(`Import failed: ${error instanceof Error ? error.message : "Invalid JSON format"}`)
    }
  }

  const restoreBackup = () => {
    try {
      const backupHabits = localStorage.getItem("icanquit-habits-backup")
      const backupProfile = localStorage.getItem("icanquit-profile-backup")

      if (backupHabits) {
        localStorage.setItem("icanquit-habits", backupHabits)
      }
      if (backupProfile) {
        localStorage.setItem("icanquit-profile", backupProfile)
      }

      setImportStatus("success")
      setImportMessage("Backup restored successfully")

      setTimeout(() => {
        window.location.reload()
      }, 1500)
    } catch (error) {
      setImportStatus("error")
      setImportMessage("Failed to restore backup")
    }
  }

  return (
    <div className="flex gap-2">
      {/* Export Dialog */}
      <Dialog open={isExportOpen} onOpenChange={setIsExportOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export Your Data</DialogTitle>
            <DialogDescription>Download a backup of all your habits, achievements, and profile data.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Alert>
              <FileText className="h-4 w-4" />
              <AlertDescription>
                This will create a JSON file containing all your ICanQuit data. Keep this file safe as a backup.
              </AlertDescription>
            </Alert>
            <div className="flex gap-2">
              <Button onClick={exportData} className="flex-1">
                <Download className="h-4 w-4 mr-2" />
                Download Backup
              </Button>
              <Button variant="outline" onClick={() => setIsExportOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Import Dialog */}
      <Dialog open={isImportOpen} onOpenChange={setIsImportOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import Data
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Import Your Data</DialogTitle>
            <DialogDescription>Restore your habits and profile from a backup file or JSON data.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Warning:</strong> This will replace all your current data. Make sure to export your current data
                first as a backup.
              </AlertDescription>
            </Alert>

            <div>
              <Label htmlFor="import-file">Import from File</Label>
              <Input id="import-file" type="file" accept=".json" onChange={importDataFromFile} className="mt-1" />
            </div>

            <div>
              <Label htmlFor="import-text">Or Paste JSON Data</Label>
              <Textarea
                id="import-text"
                value={importData}
                onChange={(e) => setImportData(e.target.value)}
                placeholder="Paste your exported JSON data here..."
                rows={8}
                className="mt-1 font-mono text-sm"
              />
            </div>

            {importStatus !== "idle" && (
              <Alert className={importStatus === "success" ? "border-green-500" : "border-red-500"}>
                {importStatus === "success" ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertDescription className={importStatus === "success" ? "text-green-700" : "text-red-700"}>
                  {importMessage}
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-2">
              <Button
                onClick={validateAndImportData}
                disabled={!importData.trim() || importStatus === "success"}
                className="flex-1"
              >
                <Upload className="h-4 w-4 mr-2" />
                Import Data
              </Button>
              <Button variant="outline" onClick={restoreBackup}>
                Restore Backup
              </Button>
              <Button variant="outline" onClick={() => setIsImportOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
