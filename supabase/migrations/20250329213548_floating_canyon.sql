/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `image_url` (text)
      - `category` (text)
      - `read_time` (text)
      - `created_at` (timestamp)
      - `published_at` (timestamp)
      - `author_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policies for public read access
    - Add policies for authenticated authors to manage their posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text,
  image_url text,
  category text,
  read_time text,
  created_at timestamptz DEFAULT now(),
  published_at timestamptz,
  author_id uuid REFERENCES auth.users(id)
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published posts
CREATE POLICY "Anyone can read published posts"
  ON blog_posts
  FOR SELECT
  USING (published_at IS NOT NULL);

-- Allow authors to manage their own posts
CREATE POLICY "Authors can manage their posts"
  ON blog_posts
  USING (auth.uid() = author_id);