'use strict';

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/katalog/kursi-kantor-modern', (req, res) => {
	res.render('kursi-kantor-modern')
})

app.get('/katalog/kursi-kantor-exclusive', (req, res) => {
	res.render('kursi-kantor-exclusive')
})

app.get('/katalog/meja-bundar-minimalis', (req, res) => {
	res.render('meja-bundar-minimalis')
})

app.get('/detail/:slug', (req, res) => {
	let data = {}
	if(req.params.slug == 'kursi-kantor-modern') {
		data = {
			title: 'Kursi Kantor Modern',
			slug: 'kursi-kantor-modern',
			image: 'kursi-komputer-modern2.png',
			price: 'Rp. 1.600.000',
			desc: 'Modelnya Yang Elegan Dan Mengesankan Akan Membuat Suasana Kerja Semakin Terasa Nyaman Dan Menyenangkan.sandarannya Dibuat Dengan Cukup Tinggi Agar Sempurna Menopang Kepala Kamu. Keunggulan Lain Yang Tak Boleh Dilewatkan Adalah Bantalannya. Dengan Kualitas Bahan Dan Ketebalan Yang Pas, Duduk Berjam-jam Tak Akan Terasa Lama Di Kursi'
		}
	} else if(req.params.slug == 'kursi-kantor-exclusive') {
		data = {
			title: 'Kursi Kantor Exclusive',
			slug: 'kursi-kantor-exclusive',
			image: 'kursi-komputer-exclusive2.png',
			price: 'Rp. 2.100.000',
			desc: 'Didukung Dengan Material Senderan Polyester Mesh Fabric Danmaterial Dudukan High Density Foam, Yang Dibuat Dengan Desain Lumbar Support Yang Ramah Untuk Tulang Belakang. Juga Merupakan Kursi Yang Dirancang Untuk Memberikan Kenyamanan Maksimal Sekaligus Menjaga Postur Tubuh Saat Duduk. Tentunya, Memakai Kursi Kami Akan Memberikan Manfaat Lebih Dibanding Hanya Memakai Kursi Komputer Biasa.'
		}
	} else if(req.params.slug == 'meja-bundar-minimalis') {
		data = {
			title: 'Meja Bundar Minimalis',
			slug: 'meja-bundar-minimalis',
			image: 'meja-bundar2.png',
			price: 'Rp. 600.000',
			desc: 'Menghadirkan Meja Bulat Dengan Desain Minimalis Berwarna Hitam Yang Dapat Kamu Tempatkan Pada Ruang Manapun Dengan Space Kecil. Dengan Warna Hitam Netral, Kamu Bisa Mengkombinasikan Dengan Kursi Warna Senada Ataupun Warna Cerah Lainnya. Terbuat Dari Particle Board Dengan Kaki Meja Dari Bahan Yang Diperkuat, Meja Bulat Ini Cukup Kuat Dan Mampu Menahan Beban Hingga 100 Kg. Karet Pengaman Pada Setiap Kaki Meja Juga Akan Mencegah Lantai Dari Goresan.'
		}
	} else {
		res.status(404).send('Product Not found');
	}

	res.render('detail', data)
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})