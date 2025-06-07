-- Update sample data to reflect the new ICanQuit branding and features
-- This script adds promise examples and motivational content

-- Update habits table to include promises
ALTER TABLE habits ADD COLUMN promise TEXT;

-- Update existing sample habits with promises
UPDATE habits SET promise = 'I promise myself to quit smoking because I want to live a longer, healthier life for my family and myself. Every cigarette I don''t smoke is a victory for my future.' WHERE name = 'Smoking';

UPDATE habits SET promise = 'I commit to reducing my social media usage because I want to be more present in real life and focus on meaningful relationships and activities.' WHERE name = 'Excessive Social Media';

UPDATE habits SET promise = 'I will stop biting my nails because I want healthy, attractive hands and to break this nervous habit that doesn''t serve me.' WHERE name = 'Nail Biting';

UPDATE habits SET promise = 'I promise to overcome procrastination because I want to achieve my goals and feel proud of my accomplishments instead of stressed about unfinished tasks.' WHERE name = 'Procrastination';

-- Add more motivational quotes
INSERT INTO motivational_quotes (quote, author, category) VALUES
('It does not matter how slowly you go as long as you do not stop.', 'Confucius', 'persistence'),
('The pain of discipline weighs ounces while the pain of regret weighs tons.', 'Jim Rohn', 'discipline'),
('You are stronger than your urges. You are bigger than your challenges.', 'Unknown', 'strength'),
('This feeling will pass, but your progress is permanent.', 'Unknown', 'resilience'),
('Your future self will thank you for the strength you show today.', 'Unknown', 'future'),
('Every moment is a fresh beginning.', 'T.S. Eliot', 'renewal'),
('The only way out is through.', 'Robert Frost', 'perseverance'),
('You have been assigned this mountain to show others it can be moved.', 'Mel Robbins', 'inspiration');

-- Add neuroscience facts for different time periods
INSERT INTO health_facts (category, title, description, source, timeframe) VALUES
('neuroscience', 'Initial Withdrawal', 'Your brain begins adjusting to the absence of the addictive substance. Dopamine levels start to stabilize.', 'Dr. Anna Lembke, Stanford', '1-3 days'),
('neuroscience', 'Neuroplasticity Activation', 'New neural pathways begin forming as your brain adapts to healthier patterns.', 'Dr. Norman Doidge', '1-2 weeks'),
('neuroscience', 'Prefrontal Cortex Strengthening', 'The brain''s executive control center becomes more active, improving decision-making.', 'Dr. Judson Brewer, Brown University', '1 month'),
('neuroscience', 'Dopamine Receptor Recovery', 'Dopamine receptors begin returning to normal density, making natural rewards satisfying again.', 'Dr. Nora Volkow, NIDA', '2-3 months'),
('neuroscience', 'Structural Brain Changes', 'Significant structural brain changes occur with improved white matter integrity.', 'Dr. Bryon Adinoff, UT Southwestern', '6+ months');

-- Add promise templates for different habit categories
INSERT INTO promise_templates (category, template) VALUES
('smoking', 'I promise myself to quit smoking because I want to live a longer, healthier life for my family and myself. Every cigarette I don''t smoke is a victory for my future.'),
('substance', 'I commit to breaking free from this substance because I deserve a clear mind and a healthy body. I am stronger than my addiction.'),
('digital', 'I promise to control my digital habits because I want to be more present in real life and focus on meaningful relationships and activities.'),
('behavioral', 'I will overcome this habit because it doesn''t serve my highest good. I am capable of change and growth.'),
('dietary', 'I commit to making healthier food choices because I respect my body and want to fuel it with nutrition that makes me feel strong and energized.');

-- Create a table for tracking user promises (for reference, actual app uses localStorage)
CREATE TABLE IF NOT EXISTS user_promises (
  id SERIAL PRIMARY KEY,
  habit_id VARCHAR(255) NOT NULL,
  promise_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add sample user promises
INSERT INTO user_promises (habit_id, promise_text) VALUES
('habit_1', 'I promise to quit smoking because I want to see my children grow up and be a healthy role model for them.'),
('habit_2', 'I commit to overcoming this addiction because I deserve freedom and peace of mind.'),
('habit_3', 'I will break this habit because I want to live authentically and be proud of my choices.');
