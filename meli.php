<?php
//untuk menyimpan file data txt 
	echo "<head><title>My Guest Book</head></title>";

	$fp = fopen("guestbook.txt","a+");
//mengisi form buku tamu
	$nama = $_POST['nama'];
	$alamat = $_POST['alamat'];
	$universitas = $_POST['universitas'];
	$tanggal = $_POST['tanggal'];
	$hobi = $_POST['hobi'];
	$Jeniskelamin = $_POST['pilih'];
	
	fputs($fp,"$nama-$alamat-$universitas-$tanggal-$hobi-$Jeniskelamin\n");
	fclose($fp);
//end
	echo "Thank you for filling in this guest book <br>";
	
?>