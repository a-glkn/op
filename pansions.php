
    <? require_once('header.php'); ?>
    <? //require_once('slider.php'); ?>
    <div class="clearfix"></div>

	<section id="breadcrumbs">
		<div class="container">
			<ul>
				<li><a href="index.php">Главная</a></li>
				<li>Пансионаты для пожилых</li>
			</ul>
		</div>
	</section>

    <setcion id="pansions">
    	<div class="container">
			<h1 class="bigHeader">Пансионаты для пожилых</h1>
			<hr>
			<div class="share">
				<a href="#" class="shareButton">Поделиться</a>
			</div>
			<h3>Поиск по параметрам проживания</h3>
			<div class="row filters">
		        <div class="col-md-12">
		            <div class="filter-form">
						<form action="">
							<div class="sel-col">
								<select name="cost" class="cost custom-sel">
									<option value="0">Стоимость</option>
									<option value="0">до 5 000 </option>
									<option value="0">5 000 - 8 000</option>
									<option value="0">более 8 000</option>
								</select><select name="district" class="district custom-sel">
									<option value="0">Районы</option>
									<option value="1">Район 1</option>
									<option value="2">Райончик 2</option>
									<option value="3">Райончик поболее</option>
								</select><select name="features" class="features custom-sel">
									<option value="0">Особенности</option>
									<option value="1">Особенность 1</option>
									<option value="2">Особенность 2</option>
									<option value="3">Особенность поболее</option>
								</select>
							</div>
							<div class="btn-col"><button class="sub">Индивидуальный подбор пансионата</button></div>
						</form>
					</div>
		        </div>
			</div>

    		<div class="row pansionCard pansionCard-left">
    			<div class="col-md-6">
    				<div class="item pansionPhoto">
						<div class="photoControls">
							<a href="#" class="prevPhoto"></a><a href="#" class="nextPhoto"></a><a href="./img/p1.jpg" data-fancybox-group="p1galery" class="zoom"></a>
						</div>
						<div class="pansion-slider">
							<div class="slide">
								<a href="./img/p1.jpg" data-fancybox-group="p1galery" class="zoomOut"></a>
								<img class="p1photo" src="./img/p1.jpg">
							</div>
							<div class="slide">
								<a href="./img/p2.jpg" data-fancybox-group="p1galery" class="zoom"></a>
								<img class="p1photo" src="./img/p2.jpg">
							</div>
							<div class="slide">
								<a href="./img/p3.jpg" data-fancybox-group="p1galery" class="zoom"></a>
								<img class="p1photo" src="./img/p3.jpg">
							</div>
						</div>
						<div class="overlay">
							<div class="price">от <span>2250</span> руб./сут.</div>
							<div class="desc">
								Персональные сиделки<br>
								Домашняя атмосфера<br>
								Комфортные условия
							</div>
						</div>
            		</div>
    			</div>
    			<div class="col-md-6">
    				<div class="item pansionInfo">
						<div class="title">
							<h2>
								Адмиралтейский
								<div class="tel">
									+7 (812) 748 16 88
								</div>
							</h2>
						</div>

						<p>Пансионат располагается в трехэтажном здании в Адмиралтейском районе по адресу: Рабочий переулок, 3</p>

						<a href="" class="more">Связаться с нами</a>
						<a href="" class="more more-link more-arrow">Особенности подробнее</a>
					</div>
    			</div>
    		</div>

    		<div class="row pansionCard pansionCard-right">
    			<div class="col-md-6 col-md-push-6">
    				<div class="item pansionPhoto">
						<div class="photoControls">
							<!-- <button class="prevPhoto"></button><button class="nextPhoto"></button><a href="./img/p1.jpg" class="zoom"></a> -->
							<a href="#" class="prevPhoto"></a><a href="#" class="nextPhoto"></a><a href="./img/p1.jpg" data-fancybox-group="p1galery" class="zoom"></a>
						</div>
						<div class="pansion-slider">
							<div class="slide">
								<!-- <a href="./img/p1.jpg" data-fancybox-group="p1galery" class="zoom"><img class="p1photo" src="./img/p1.jpg"></a> -->
								<a href="./img/p1.jpg" data-fancybox-group="p1galery" class="zoomOut"></a>
								<img class="p1photo" src="./img/p1.jpg">
							</div>
							<div class="slide">
								<!-- <a href="./img/p2.jpg" data-fancybox-group="p1galery" class="zoom"><img class="p1photo" src="./img/p2.jpg"></a> -->
								<a href="./img/p2.jpg" data-fancybox-group="p1galery" class="zoom"></a>
								<img class="p1photo" src="./img/p2.jpg">
							</div>
							<div class="slide">
								<!-- <a href="./img/p3.jpg" data-fancybox-group="p1galery" class="zoom"><img class="p1photo" src="./img/p3.jpg"></a> -->
								<a href="./img/p3.jpg" data-fancybox-group="p1galery" class="zoom"></a>
								<img class="p1photo" src="./img/p3.jpg">
							</div>
						</div>
						<div class="overlay">
							<div class="price">от <span>2250</span> руб./сут.</div>
							<div class="desc">
								Персональные сиделки<br>
								Домашняя атмосфера<br>
								Комфортные условия
							</div>
						</div>
            		</div>
    			</div>
          <div class="col-md-6 col-md-pull-6">
            <div class="item pansionInfo">
				<div class="title">
					<h2>
						Адмиралтейский
						<div class="tel">
							+7 (812) 748 16 88
						</div>
					</h2>
				</div>

				<p>Пансионат располагается в трехэтажном здании в Адмиралтейском районе по адресу: Рабочий переулок, 3</p>

				<a href="" class="more">Связаться с нами</a>
				<a href="" class="more more-link more-arrow">Особенности подробнее</a>
            </div>
          </div>
    		</div>

    		<div class="row pansionCard pansionCard-left">
    			<div class="col-md-6">
    				<div class="item pansionPhoto">
						<div class="photoControls">
							<!-- <button class="prevPhoto"></button><button class="nextPhoto"></button><a href="./img/p1.jpg" class="zoom"></a> -->
							<a href="#" class="prevPhoto"></a><a href="#" class="nextPhoto"></a><a href="./img/p1.jpg" data-fancybox-group="p1galery" class="zoom"></a>
						</div>
						<div class="pansion-slider">
							<div class="slide">
								<!-- <a href="./img/p1.jpg" data-fancybox-group="p1galery" class="zoom"><img class="p1photo" src="./img/p1.jpg"></a> -->
								<a href="./img/p1.jpg" data-fancybox-group="p1galery" class="zoomOut"></a>
								<img class="p1photo" src="./img/p1.jpg">
							</div>
							<div class="slide">
								<!-- <a href="./img/p2.jpg" data-fancybox-group="p1galery" class="zoom"><img class="p1photo" src="./img/p2.jpg"></a> -->
								<a href="./img/p2.jpg" data-fancybox-group="p1galery" class="zoom"></a>
								<img class="p1photo" src="./img/p2.jpg">
							</div>
							<div class="slide">
								<!-- <a href="./img/p3.jpg" data-fancybox-group="p1galery" class="zoom"><img class="p1photo" src="./img/p3.jpg"></a> -->
								<a href="./img/p3.jpg" data-fancybox-group="p1galery" class="zoom"></a>
								<img class="p1photo" src="./img/p3.jpg">
							</div>
						</div>
						<div class="overlay">
							<div class="price">от <span>2250</span> руб./сут.</div>
							<div class="desc">
								Персональные сиделки<br>
								Домашняя атмосфера<br>
								Комфортные условия
							</div>
						</div>
            		</div>
    			</div>
    			<div class="col-md-6">
					<div class="item pansionInfo">
						<div class="title">
							<h2>
								Адмиралтейский
								<div class="tel">
									+7 (812) 748 16 88
								</div>
							</h2>
						</div>

						<p>Пансионат располагается в трехэтажном здании в Адмиралтейском районе по адресу: Рабочий переулок, 3</p>

						<a href="" class="more">Связаться с нами</a>
						<a href="" class="more more-link more-arrow">Особенности подробнее</a>
					</div>
    			</div>
    		</div>

    	</div>
    </setcion>

    <? require_once('feedback.php'); ?>
    <? require_once('footer.php'); ?>
