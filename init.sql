-- Membuat database
CREATE DATABASE IF NOT EXISTS db_koleksi_film;
USE db_koleksi_film;

-- Membuat tabel koleksi
CREATE TABLE IF NOT EXISTS koleksi (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    judul         VARCHAR(100) NOT NULL,
    sutradara     VARCHAR(100) NOT NULL,
    tahun         INT NOT NULL,
    genre         VARCHAR(50) NOT NULL,
    status_nonton ENUM('Belum Ditonton', 'Selesai') NOT NULL DEFAULT 'Belum Ditonton',
    rating        DECIMAL(3,1) NULL,
    review        TEXT NULL
);

-- Mengisi data awal
INSERT INTO koleksi (judul, sutradara, tahun, genre, status_nonton, rating, review) VALUES
('Inception', 'Christopher Nolan', 2010, 'Sci-Fi', 'Selesai', 9.0, 'Film mind-bending dengan alur mimpi berlapis'),
('Parasite', 'Bong Joon-ho', 2019, 'Thriller', 'Selesai', 8.5, 'Satir sosial yang tajam dan twist-nya gila'),
('Dune: Part Two', 'Denis Villeneuve', 2024, 'Sci-Fi', 'Belum Ditonton', NULL, 'Belum sempat nonton');

-- Menampilkan seluruh data
SELECT * FROM koleksi;