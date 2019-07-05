function cari() {
	//untuk mencari di bagian SEARCH form google
	var kata = document.formcari.keyword.value;
	var hasil= "http://www.google.com/search?q=" + kata ;
	window.open(hasil, 'google', config='height=500, width=auto, scrollbars=yes location=yes') 
}


 function nama(){
 	//Menampilkan outputan nice ketika selesai membaca
      alert("Nice");
    }
 
 function terserah(){
 	//Jika Ingin membaca 
 	document.getElementById("demo").innerHTML = ("HTML (HyperText Markup Language) adalah sebuah jenis teks dokumen khusus yang digunakan oleh web browser untuk mempresentasikan teks dan gambar. Dokumen HTML sering disebut sebagai halaman web. Browser mengambil halaman web dari web server dan karena adanya internet, halaman tersebut bisa berada di manapun di dunia.CSS merupakan kependekan dari Cascading Style Sheet yang memungkinkan Anda untuk mendesain (style) tampilan dokumen (terutama HTML) dengan memisahkan isi dari dokumen HTML dengan kode untuk menampilkannya (CSS).JavaScript adalah suatu bahasa script yang didasarkan pada konsep pemrograman berbasis prototipe. Bahasa ini terutama terkenal karena penggunaannya di situs web (sebagai JavaScript sisi klien) dan juga digunakan untuk menyediakan akses script untuk objek yang dibenamkan (embedded) di aplikasi lain."); }