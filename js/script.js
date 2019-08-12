// Switch Toggle
$(document).ready(function(){
	$('.switch input').click(function(){
		var chk = $(this).is(':checked');
		if(chk == true){
			$('.droparea').addClass('xs');
		}else{
			$('.droparea').removeClass('xs');
		}
	});
	$('#wrapcolor').change(function(){
		var bgcolor = $('#wrapcolor').val();
		$('.wrap').css('background', bgcolor);
	});
});
$('#wrapcolor').colorPicker({
	pickerDefault: "f2f2f4"
	,colors: [
		"#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff","#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f",
		"#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc","#ea9999","#f9cb9c","#ffe599","#b6d7a8",
		"#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd","#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0",
		"#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79","#900","#b45f06","#bf9000","#38761d",
		"#134f5c","#0b5394","#351c75","#741b47","#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"
	]
	,transparency: true
});
// Drag & Drop(Sortable)
$(document).ready(function(){
	$(".drag-list li").draggable({
		connectToSortable: ".droparea",
		helper: "clone",
		revert: "invalid"
	});
	$(".droparea").sortable({
		revert: true,
		placeholder: "ui-state-highlight",
		receive : function(event, ui) {
			$(this).find('li').replaceWith(Category(jQuery(ui.item[0]).attr('item')));
		}
	});
	$(".drag-list li, .droparea").disableSelection();
});
// Append Templetes
function addCategory(item){
	var category = Category(item);
	$('.droparea').append(category);
}
// Left Sidebar Accordion
$(function(){
    $( "#templete" ).accordion({
        heightStyle: "fill"
    });
});
// Modal
$(document).ready(function() {	
	$('a[name=modal]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeTo("slow",0.5);	
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		$(id).slideDown(1000); 
	});
	$('.window .close_modal, #mask').click(function (e) {
		e.preventDefault();
		$('#mask').hide();
		$('.window').hide();
	});			
	$(window).resize(function () {
 		var box = $('#modals .window');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        var winH = $(window).height();
        var winW = $(window).width();
        box.css('top',  winH/2 - box.height()/2);
        box.css('left', winW/2 - box.width()/2);
	});
});
// Code Preview
$('a[href=#preview]').click(function(){
	var Data = $('.droparea').html();
	$('#preview pre code').text(Data);
});
// Contents Reset
function reset(){
	var Data = $('.droparea').empty();
	$('#mail-load').val('');
}
// Html File Save
function save(){
	var MWidth = $('.droparea').width();
	//alert(MWidth);
	$('.droparea .edit_wrap').width(MWidth);
	$('.droparea img').css('border', 'none');
	var Data = $('.wrapper').html();
	$("#export-textarea").val(Data);
	$("#export-form").submit();
	$("#export-textarea").val(' ');
}
//$("#btn_group").buttonset();
// Edit Wrap
$(document).on("mouseenter", ".edit_wrap", function(){
	$(this).append('<div class="wrap-hover"><div class="del"><i class="fa fa-times"></i></div></div>');
	//$('.copy').click(function(){
	//	copy_obj = $(this).parents('.edit_wrap').clone(true);
	//	copy_obj.appendTo($('.droparea'));
	//});
	$('.del').click(function(){
		$(this).parents('.edit_wrap').remove();
	});
}).on("mouseleave", ".edit_wrap", function(){
	$('.wrap-hover').remove();
});
// Edit Wrap
$(document).on("mouseenter", ".bg_color", function(){
	$(this).append('<a class="bg-hover" href="#edit-form"><i class="fa fa-paint-brush"></i></a>');
	$('.bg-hover').click(function(){
		parent = $(this).parent();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeTo(300,0.5);	
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).css('top',  50);
		$(id).css('left', winW/2-$(id).width()/2);
		$(id).show();
		
		$('#edit-form h2 span').text('배경 변경하기');
		var $bgcolor = parent.css('background-color');
		var edit = '';
		edit += '<label for="bgcolor" style="position:relative;top:-10px;">배경색</label> <input id="bgcolor" type="text" maxlength="6" value="'+ $bgcolor +'"/><br/>';
		edit += '<hr/><label for="bgimg">배경 이미지</label>';
		edit += '<input id="bgimg" type="file" /><script>img_upload()</script>';
		$('#edit-form .edit-contents').html(edit);
		$('#edit-form .btn-area .edit-save').attr('data-type', 'bgcolor');
		$('#bgcolor').colorPicker({
			pickerDefault: "f2f2f4"
			,colors: [
				"#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff","#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f",
				"#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc","#ea9999","#f9cb9c","#ffe599","#b6d7a8",
				"#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd","#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0",
				"#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79","#900","#b45f06","#bf9000","#38761d",
				"#134f5c","#0b5394","#351c75","#741b47","#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"
			]
			,transparency: true
		});
		return false;
	});
	
}).on("mouseleave", ".bg_color", function(){
	$('.bg-hover').remove();
});

// Edit Object
$(document).on("mouseenter", ".obj_edit", function(){
	$(this).append('<a class="edit-hover" href="#edit-form"><i class="fa fa-pencil"></i></a>');
	$('.edit-hover').click(function(e){
		parent = $(this).parent();
		type = parent.attr('data-type');
		
		e.preventDefault();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeTo(300,0.5);	
		var winH = $(window).height();
		var winW = $(window).width();
		//$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('top',  50);
		$(id).css('left', winW/2-$(id).width()/2);
		$(id).show(); 

		if(type == 'image'){
			var img_ourl = parent.children('img').attr('src');
			$('#edit-form h2 span').text('이미지 수정하기');
			var edit = '';
			edit += '<input id="img_ourl" type="file" />';
			edit += '<script>img_upload()</script>';
			$('#edit-form .edit-contents').html(edit);
			$('#edit-form .btn-area .edit-save').attr('data-type', type);
		}
		if(type == 'image2'){
			var img_ourl = parent.children('img').attr('src');
			var img_olink = parent.attr('href');
			$('#edit-form h2 span').text('이미지 및 링크 수정하기');
			var edit = '';
			edit += '<input id="img_ourl" type="file" /><script>img_upload()</script>';
			edit += '<hr/><label for="img_link">연결 링크 경로</label><input id="img_link" type="text" value="'+img_olink+'"/>';
			$('#edit-form .edit-contents').html(edit);
			$('#edit-form .btn-area .edit-save').attr('data-type', type);
		}
		if(type == 'text'){
			var txt_cont = parent.children('span').html();
			//alert(txt_cont);
			$('#edit-form h2 span').text('텍스트 수정하기');
			var edit = '';
			edit += '<textarea id="text_cont" style="width:100%;height:200px;">'+txt_cont+'</textarea>';
			$('#edit-form .edit-contents').html(edit);
			$('#edit-form .btn-area .edit-save').attr('data-type', type);
		}
		if(type == 'product'){
			var img_ourl = parent.children('img').attr('src');
			var prod_nm = parent.find('h2').text();
			var simple_desc = parent.find('#simple_desc').text();
			var dis_rate = parent.find('#discount').text();
			var prod_cost = parent.find('#cost').text();
			var prod_price = parent.find('#price').text();
			var prod_link = parent.attr('href');
			$('#edit-form h2 span').text('상품정보 수정하기');
			var edit = '';
			edit += '<input id="img_ourl" type="file" /><script>img_upload()</script>';
			edit += '<hr/><label for="prod_nm">상품명</label><input id="prod_nm" type="text" value="'+prod_nm+'" style="margin-bottom:10px;" />';
			edit += '<label for="sm_desc">상품 간략설명</label><input id="sm_desc" type="text" value="'+simple_desc+'" style="margin-bottom:10px;" />';
			edit += '<label for="pd_cost">상품가(원래 가격을 입력하세요.)</label><input id="pd_cost" type="text" value="'+prod_cost+'" style="margin-bottom:10px;" />';
			edit += '<label for="pd_price">판매가(할인이 적용된 가격을 입력하세요.)</label><input id="pd_price" type="text" value="'+prod_price+'" style="margin-bottom:10px;" />';
			edit += '<label for="rate">할인률</label><input id="rate" type="text" value="'+dis_rate+'" style="margin-bottom:10px;" />';
			edit += '<label for="img_link">연결 링크 경로</label><input id="img_link" type="text" value="'+prod_link+'"/>';
			$('#edit-form .edit-contents').html(edit);
			$('#edit-form .btn-area .edit-save').attr('data-type', type);
		}
		if(type == 'product2'){
			var prod_nm = parent.find('h2').text();
			var dis_rate = parent.find('#discount').text();
			var prod_cost = parent.find('#cost').text();
			var prod_price = parent.find('#price').text();
			var prod_link = parent.attr('href');
			$('#edit-form h2 span').text('상품정보 수정하기');
			var edit = '';
			edit += '<label for="prod_nm">상품명</label><input id="prod_nm" type="text" value="'+prod_nm+'" style="margin-bottom:10px;" />';
			edit += '<label for="pd_cost">상품가(원래 가격을 입력하세요.)</label><input id="pd_cost" type="text" value="'+prod_cost+'" style="margin-bottom:10px;" />';
			edit += '<label for="pd_price">판매가(할인이 적용된 가격을 입력하세요.)</label><input id="pd_price" type="text" value="'+prod_price+'" style="margin-bottom:10px;" />';
			edit += '<label for="rate">할인률</label><input id="rate" type="text" value="'+dis_rate+'" style="margin-bottom:10px;" />';
			edit += '<label for="img_link">연결 링크 경로</label><input id="img_link" type="text" value="'+prod_link+'"/>';
			$('#edit-form .edit-contents').html(edit);
			$('#edit-form .btn-area .edit-save').attr('data-type', type);
		}
		return false;
	});
}).on("mouseleave", ".obj_edit", function(){
	$('.edit-hover').remove();
});
// Editor Modal Save Btn Click
$('.edit-save').click(function(){
	var type = $(this).attr('data-type');

	if(type == 'text'){
		var txt_cont = $('#text_cont').val();
		parent.children('span').html(txt_cont);

		jQuery('#edit-form .close_modal').trigger('click');

		return false;
	} else {
		var img_url = $('.ezdz-accept > div > img').attr('src');
		var obj = parent;
		var oImg = parent.children('img');

		if(type == 'bgcolor'){
			oImg = parent;
			oImg.css({
				'background-color': ('#' + $('#bgcolor').val())
			});
		} else if(type == 'image2') {
			obj.attr('href', $('#img_link').val());
		} else if(type == 'product' || type == 'product2'){
			oImg = parent.find('img');

			obj.find('h2').html($('#prod_nm').val());
			obj.find('#discount').html($('#rate').val());
			obj.find('#cost del').html($('#pd_cost').val());
			obj.find('#price').html($('#pd_price').val());
			obj.attr('href', $('#img_link').val());

			if(obj.find('#simple_desc').length > 0) {
				obj.find('#simple_desc').html($('#sm_desc').val());
			}
		}

		if(img_url == undefined) {
			img_url = '';
		}

		if(img_url != '') {
			jQuery.ajax({
				type: "POST"
				,dataType: "json"
				,url: "/proc_builder.php"
				,data: {'rt':'ajax', 'ct':'img_up', 'img64':img_url}
				,success: function(json) {
					if(json) {
						if(json.ret == 'succ')
						{
							if(type == 'bgcolor'){
								oImg.css('background-image', 'url('+ json.items +')');
							} else {
								oImg.attr('src', json.items);
							}

							jQuery('#edit-form .close_modal').trigger('click');
						} else {
							alert("이미지 업로드에 실패했습니다. 다시 시도해 주세요.");
						}
					} else {
						alert("이미지 업로드에 실패했습니다. 다시 시도해 주세요.");
					}
				}
			});
		} else {
			jQuery('#edit-form .close_modal').trigger('click');
		}
	}


		//	if(type == 'image'){
		//		var img_url = $('.ezdz-accept > div > img').attr('src');
		//		parent.children('img').attr('src', img_url);
		//	}
		//	if(type == 'image2'){
		//		var img_url = $('.ezdz-accept > div > img').attr('src');
		//		var img_link = $('#img_link').val();
		//		parent.children('img').attr('src', img_url);
		//		parent.attr('href', img_link);
		//	}
		//	if(type == 'bgcolor'){
		//		var bgcolor = '#' + $('#bgcolor').val();
		//		var bgimg = $('.ezdz-accept > div > img').attr('src');
		//		//alert(bgimg);
		//		parent.css({
		//			'background-color':bgcolor,
		//			'background-image':'url('+ bgimg +')'
		//		});
		//	}
		//	if(type == 'text'){
		//		var txt_cont = $('#text_cont').val();
		//		parent.children('span').html(txt_cont);		
		//	}
		//	if(type == 'product'){
		//		var prod_img = $('.ezdz-accept > div > img').attr('src');
		//		var prod_nm = $('#prod_nm').val();
		//		var sm_desc = $('#sm_desc').val();
		//		var dis_rate = $('#rate').val();
		//		var prod_cost = $('#pd_cost').val();
		//		var prod_price = $('#pd_price').val();
		//		var prod_link = $('#img_link').val();
		//		parent.find('img').attr('src', prod_img);
		//		parent.find('h2').html(prod_nm);
		//		parent.find('#simple_desc').html(sm_desc);
		//		parent.find('#discount').html(dis_rate);
		//		parent.find('#cost del').html(prod_cost);
		//		parent.find('#price').html(prod_price);
		//		parent.attr('href', prod_link);
		//	}
		//	if(type == 'product2'){
		//		var prod_img = $('.ezdz-accept > div > img').attr('src');
		//		var prod_nm = $('#prod_nm').val();
		//		var dis_rate = $('#rate').val();
		//		var prod_cost = $('#pd_cost').val();
		//		var prod_price = $('#pd_price').val();
		//		var prod_link = $('#img_link').val();
		//		parent.find('img').attr('src', prod_img);
		//		parent.find('h2').html(prod_nm);
		//		parent.find('#discount').html(dis_rate);
		//		parent.find('#cost del').html(prod_cost);
		//		parent.find('#price').html(prod_price);
		//		parent.attr('href', prod_link);
		//	}
		//	return false;
});
// Drag and Drop Img File Upload
function img_upload(){
	$('#img_ourl').ezdz();
}

function readText(that){
	if(that.files && that.files[0]){
		var reader = new FileReader();
		reader.onload = function (e) {  
			document.getElementById('mail-wrapper').innerHTML= e.target.result;
		};//end onload()
		reader.readAsText(that.files[0]);
	}//end if html5 filelist support
	$('#mask').hide();
	$('.window').hide();
}