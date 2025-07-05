-- This script creates sample data for testing the ICantQuit application
-- Note: This is for demonstration purposes only as the app uses localStorage

-- Sample habits that users might want to quit
INSERT INTO habits (name, description, category, default_milestones) VALUES
('Smoking', 'Quit smoking cigarettes for better health', 'substance', '[1,3,7,14,30,60,90,180,365]'),
('Excessive Social Media', 'Reduce time spent on social media platforms', 'digital', '[1,3,7,14,30,60,90]'),
('Nail Biting', 'Stop the habit of biting nails', 'behavioral', '[1,7,14,30,60,90]'),
('Procrastination', 'Overcome the tendency to delay tasks', 'behavioral', '[1,3,7,14,30,60,90]'),
('Excessive Gaming', 'Control gaming habits for better life balance', 'digital', '[1,3,7,14,30,60,90]'),
('Junk Food', 'Eliminate unhealthy food choices', 'dietary', '[1,3,7,14,30,60,90]'),
('Caffeine Dependency', 'Reduce or eliminate caffeine consumption', 'substance', '[1,3,7,14,30,60,90]'),
('Negative Self-Talk', 'Replace negative thoughts with positive ones', 'mental', '[1,7,14,30,60,90]');

-- Sample achievements that can be unlocked
INSERT INTO achievements (name, description, icon, milestone_days) VALUES
('First Step', 'Completed your first day without the habit', 'trophy', 1),
('Three Day Warrior', 'Maintained your streak for 3 days', 'BrainCircuit', 3),
('Week Champion', 'Successfully completed one week', 'star', 7),
('Two Week Hero', 'Maintained discipline for two weeks', 'medal', 14),
('Monthly Master', 'Achieved a full month of progress', 'crown', 30),
('Two Month Legend', 'Sustained progress for two months', 'diamond', 60),
('Quarterly Conqueror', 'Completed three months of growth', 'gem', 90),
('Half Year Sage', 'Maintained progress for six months', 'crystal', 180),
('Annual Champion', 'Achieved a full year of transformation', 'golden-trophy', 365);

-- Sample health facts and tips
INSERT INTO health_facts (category, title, description, source) VALUES
('smoking', 'Immediate Benefits', 'Within 20 minutes of quitting, heart rate and blood pressure drop', 'American Heart Association'),
('smoking', 'Carbon Monoxide', 'Within 12 hours, carbon monoxide levels in blood return to normal', 'CDC'),
('smoking', 'Circulation', 'Within 2-3 weeks, circulation improves and lung function increases', 'WHO'),
('addiction', 'Neuroplasticity', 'The brain can form new neural pathways, making recovery possible at any age', 'Journal of Neuroscience'),
('addiction', 'Dopamine Reset', 'After 90 days, dopamine receptors begin returning to normal levels', 'Nature Neuroscience'),
('general', 'Habit Formation', 'It takes an average of 66 days to form a new habit', 'European Journal of Social Psychology'),
('mental', 'Stress Reduction', 'Quitting harmful habits reduces cortisol levels within 30 days', 'Psychoneuroendocrinology'),
('physical', 'Sleep Quality', 'Breaking bad habits often leads to improved sleep within 2-4 weeks', 'Sleep Medicine Reviews');

-- Sample motivational quotes
INSERT INTO motivational_quotes (quote, author, category) VALUES
('The first step towards getting somewhere is to decide you are not going to stay where you are.', 'J.P. Morgan', 'motivation'),
('Success is the sum of small efforts repeated day in and day out.', 'Robert Collier', 'persistence'),
('You are never too old to set another goal or to dream a new dream.', 'C.S. Lewis', 'inspiration'),
('The only impossible journey is the one you never begin.', 'Tony Robbins', 'beginning'),
('Progress, not perfection, is the goal.', 'Unknown', 'progress'),
('Every moment is a fresh beginning.', 'T.S. Eliot', 'renewal'),
('The best time to plant a tree was 20 years ago. The second best time is now.', 'Chinese Proverb', 'timing'),
('Your future self will thank you for the choices you make today.', 'Unknown', 'future');
