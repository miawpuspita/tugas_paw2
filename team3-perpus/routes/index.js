var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //   res.render('home', { title: 'Express', layout:'main' });
  const buku =[
      { 
          buku: "Si Kancil",
          cerita: "Tentang si kancil pintar dan baijak"  
          
      },
      {
          buku: "Anak Durhaka",
          cerita: "Maling kundang si anak durhaka"
      },
      {
          buku: "Putri Duyung",
          cerita: "Putri duyung yang menyasar ke daratan"
      }
  ];
  res.render('home',{title: 'halaman home',buku, layout:'main'});
  });

router.get('/about' , function(req, res, next) {
  res.render('about',{title: 'halaman about', layout:'main'});
});

router.get('/buku' , function(req, res, next) {
  const daftarbuku =[
    {NamaBuku: "Si Kancil", Penulis: "Eric", Tahun: "2006"},
    {NamaBuku: "Maling Kundang", Penulis: "Nabila", Tahun: "2009"},
    {NamaBuku: "Anak Pintar", Penulis: "Puspita", Tahun: "2010"},
    {NamaBuku: "Bawang merah", Penulis: "Angel", Tahun: "2011"},
    {NamaBuku: "Putri Duyung", Penulis: "Darren", Tahun: "2012"},
    {NamaBuku: "Si Kembar", Penulis: "Critiano", Tahun: "2015"}
];
  res.render('buku',{title: 'halaman buku',daftarbuku, layout:'main'});
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'halaman contact', layout: 'main' });
});

module.exports = router;
