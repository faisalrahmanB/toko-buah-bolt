/*
  # Create products table for Toko Buah Segar

  1. New Tables
    - `products`
      - `id` (int, primary key, auto-increment)
      - `image_url` (text, URL for product image)
      - `name` (text, product name)
      - `price` (decimal, product price in Rupiah)
      - `description` (text, short product description)
      - `created_at` (timestamptz, auto-set on insert)

  2. Security
    - Enable RLS on `products` table
    - Add policy for anyone (including unauthenticated) to read products (public catalog)
    - Only authenticated users can insert/update/delete (admin management)

  3. Sample Data
    - 5 fruit products: Apel Fuji, Mangga Harum Manis, Jeruk Sunkist, Pisang Cavendish, Anggur Hitam
*/

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public read access for product catalog
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can insert
CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete
CREATE POLICY "Authenticated users can delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample fruit data
INSERT INTO products (image_url, name, price, description) VALUES
  ('https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600', 'Apel Fuji', 45000.00, 'Apel Fuji premium import dengan rasa manis dan tekstur renyah. Sempurna untuk camilan sehat.'),
  ('https://images.pexels.com/photos/9110451/pexels-photo-9110451.jpeg?auto=compress&cs=tinysrgb&w=600', 'Mangga Harum Manis', 35000.00, 'Mangga Harum Manis lokal dengan aroma harum khas dan daging buah yang manis legit.'),
  ('https://images.pexels.com/photos/32951/orange-juice-vitamin-fruit-orange.jpg?auto=compress&cs=tinysrgb&w=600', 'Jeruk Sunkist', 38000.00, 'Jeruk Sunkist segar berkulit mengkilap dengan kandungan vitamin C tinggi.'),
  ('https://images.pexels.com/photos/2878745/pexels-photo-2878745.jpeg?auto=compress&cs=tinysrgb&w=600', 'Pisang Cavendish', 28000.00, 'Pisang Cavendish berkualitas tinggi, manis alami dan kaya potasium untuk energi harian.'),
  ('https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600', 'Anggur Hitam', 65000.00, 'Anggur hitam premium dengan rasa manis dan asam yang seimbang, kaya antioksidan.');
