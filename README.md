<h1>Redux Thunk E-Ticaret Uygulaması</h1>

Bu proje Redux Thunk kullanılarak geliştirilmiş basit bir e-ticaret uygulamasıdır. Uygulama ürünlerin listelendiği ana sayfa ve kullanıcıların sepetlerini görüntüleyebileceği bir sepet sayfasından oluşmaktadır.


<h2>Proje Amacı</h2>

Redux Thunk'u daha iyi anlamak ve pratik yapmak için geliştirilmiştir. Asenkron veri alışverişi, sepete ürün ekleme, ürün miktarını güncelleme ve sepetten ürün silme gibi temel e-ticaret işlevlerini gerçekleştirebilen bir uygulama sunar.

<h2>Redux Thunk Nedir?</h2>

Redux Thunk, Redux için bir middleware'dir ve asenkron işlemleri yönetmek için kullanılır. Redux eylemlerinin içinde asenkron işlemleri gerçekleştirmemizi sağlar.
Temel amacı, asenkron veri alışverişini yönetmek için kullanılan eylemleri kolaylaştırmaktır. Örneğin, bir API'den veri almak, bir veritabanına yazmak veya başka bir asenkron görevi gerçekleştirmek için Redux Thunk kullanılabilir.


<h2> Özellikler </h2>

<ul>
<li>Ana sayfada kullanıcılar ürünleri listeleyebilir.</li>
<li>Kullanıcılar, ürün detaylarını görüntüleyebilir ve sepete ekleyebilir.</li>
<li>Kullanıcılar sepetlerini görüntüleyebilir, sepetlerindeki ürün miktarını güncelleyebilir ve sepetten ürün silebilir.</li>
<li>Sepetteki toplam fiyatı gösteren bir özet panel bulunmaktadır.</li>
</ul>


<h2> Proje Yapısı </h2>
<ul>
<li><b>actions: </b>Redux eylemlerinin tanımlandığı dosyalar bulunur.</li>
<li><b>components: </b>React bileşenlerinin yer aldığı klasördür.</li>
<li><b>pages: </b>Ana sayfa ve sepet sayfasının yer aldığı klasördür.</li>
<li><b>reducers: </b> Redux reducer'larının bulunduğu dosyaları içerir.</li>
<li><b>redux: </b> Redux store ve middleware konfigürasyon dosyalarını içerir.</li>
<li><b>services: </b>Veri sağlayıcılarının (API istekleri) tanımlandığı dosyalardır.</li>
</ul>


<h2>Örnek Veri</h2>
Uygulama, başlangıçta bir örnek ürün listesiyle gelmektedir. Bu ürünler, kullanıcının alışveriş deneyimini simüle etmek için kullanılır.

<h2> Kullanılan Teknolojiler </h2>
<ul>
<li><b>React: </b>Kullanıcı arayüzü oluşturmak için kullanılan bir JavaScript kütüphanesi.</li>
<li><b>Redux: </b>Uygulama durumunun yönetilmesi için kullanılan bir state yönetim kütüphanesi.</li>
<li><b>Redux Thunk: </b>Asenkron işlemleri Redux üzerinde yönetmek için kullanılan bir middleware.</li>
<li><b>React Router: </b>React uygulamalarında sayfa yönlendirmesi sağlayan bir kütüphane.</li>
<li><b>Axios:  </b>HTTP istekleri yapmak için kullanılan bir kütüphane.</li>
<li><b>Bootstrap: </b>UI bileşenleri oluşturmak için kullanılan bir CSS framework'ü.</li>
</ul>




<h2>Ekran Görüntüsü</h2>

![](./public/ThunkEcommerce.gif)