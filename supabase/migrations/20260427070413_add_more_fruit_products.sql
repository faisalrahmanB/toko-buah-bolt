/*
  # Add 3 more sample fruit products

  1. Changes
    - Insert 3 additional rows into `products` table
    - New fruits: Semangka Merah, Durian Montong, Strawberry Segar
    - This brings the total to 8 products for a fuller catalog display

  2. Security
    - No schema changes; uses existing RLS policies
*/

INSERT INTO products (image_url, name, price, description) VALUES
  ('https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=600', 'Semangka Merah', 42000.00, 'Semangka merah segar berukuran besar dengan daging buah manis dan berair, sempurna untuk menyegarkan hari Anda.'),
  ('https://images.pexels.com/photos/615704/pexels-photo-615704.jpeg?auto=compress&cs=tinysrgb&w=600', 'Durian Montong', 120000.00, 'Raja buah dengan daging tebal dan creamy, aroma khas yang menggoda, langsung dari kebun terpilih.'),
  ('https://images.pexels.com/photos/46174/strawberries-red-fruit-46174.jpeg?auto=compress&cs=tinysrgb&w=600', 'Strawberry Segar', 75000.00, 'Strawberry segar berwarna merah cerah, manis asam sempurna untuk topping kue atau camilan sehat.');
