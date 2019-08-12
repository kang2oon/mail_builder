Category = function(item) {
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate() + 1;
	if(month < 10)
		month = "0"+ month;
	if(day < 10)
		day = "0"+ day;
	//alert(day);
	//console.log(item);
	switch(item){
		// Header	
		case "header1":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#5bb901;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='text-align:left;padding:18px 15px;vertical-align:bottom;'>\n";
			category += "<div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/tit_ad_letter.png' alt='' /></div>\n";
			category += "<div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/tit_ad_letter_desc.png' alt=''/></div>\n";
			category += "</td>\n<td style='text-align:right;padding:18px 15px;'>\n";
			category += "<a href='http://www.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_2ton_wh.png' alt=''/></a>\n";
			category += "</td></tr>\n<tr>\n<td colspan='2'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='http://www.kidkids.net/eduinfo_new/eduplan_mon.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb1.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/eduinfo_new/data_list.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb2.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/eduinfo_new/poo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb3.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/eduinfo_new/multi/multi_list.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb4.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/kid_magazine/index.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb5.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/ddoran/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb6.png' alt=''/></a></td>\n";
			category += "<td><a href='http://kas.kidkids.net/html/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb7.png' alt=''/></a></td>\n";
			category += "<td><a href='http://job.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb8.png' alt=''/></a></td>\n";
			category += "<td><a href='http://academy.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb9.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb10.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n";
			category += "</td>\n</tr>\n</table>\n</div>\n";
			break;
			
		case "header2":
			var category = "";
			category += "<div class='edit_wrap' style='padding-top:15px;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td colspan='5' rowspan='2' style='vertical-align:bottom;'><a href='http://mall.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_header.png' alt=''/></a>\n</td>";
			category += "<td colspan='4' style='text-align:right;'><div class='obj_edit' data-type='text'><span style='color:#76b809;font-size:21px;font-family:tahoma;'>"+year+"-"+month+"-"+day+"</span></div></td></tr>";
			category += "<tr><td colspan='4' style='text-align:right;vertical-align:bottom;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/desc_mall_header.png' alt='' /></div>\n</td></tr>";
			category += "<tr><td colspan='9' style='height:13px;'></td></tr>";
			category += "<tr><td><a href='http://mall.kidkids.net/html/make_moongoo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu1.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=8' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu2.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=3' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu3.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=2' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu4.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=4' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu5.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=5' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu6.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=1' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu7.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=7' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu8.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/welfare/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu9.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
			
		case "header3":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#ffffff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='padding:20px 10px 15px;'><a href='http://www.edulove.co.kr/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/edulove_top_logo.png' alt=''/></a>\n</td>";
			category += "<td style='text-align:right;padding:20px 10px 15px;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_top_cert.png' alt='' /></div>\n</td></tr>";
			category += "<tr><td colspan='2' style='line-height:0;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_bg_header_line.png' alt='' /></div></td></tr>";
			category += "</table>\n</div>\n";
			break;
			
		// Contents
		case "content1":
			var category = "";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:50%;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-1.png' alt=''/></a></td>\n";
			category += "<td style='width:50%;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-2.png' alt=''/></a></td>\n";
			category += "</tr>\n<tr>\n"
			category += "<td style='width:50%;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-2.png' alt=''/></a></td>\n";
			category += "<td style='width:50%;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-1.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
		case "content2":
			var category = "";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
		case "content5":
			var category = "";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/content_type5.png' alt='' /></div></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
		case "content3":
			var category = "";
			category += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td></tr>\n";
			category += "<tr><td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
		case "content6":
			var category = "";
			category += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n";
			category += "<tr><td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
		case "content4":
			var category = "";
			category += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:500px;' colspan='2'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img6.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
			category += "<tr><td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
		case "content7":
			var category = "";
			category += "<div class='edit_wrap' style='background-color:#fff;'><table>\n";
			category += "<tr>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n</tr>\n";
			category += "</table></div>";
			break;
			
		// Blank
		case "blank1":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			break;
		case "blank2":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:20px;'></div>\n";
			break;
			
		// Products
		case "product1":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
		case "product2":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;padding:10px 0;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;margin:0 auto;'>\n<tr>\n";
			category += "<td style='width:345px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img2.png' alt='' style='border:1px solid #e4e4e4;' />\n";
			category += "<p id='simple_desc' style='font-size:12px;color:#999;padding:8px 0 0;margin:0;'>제품 간략 설명</p>\n<h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding-bottom:8px;'>상품명</h2>\n";
			category += "<div id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000원</del></div>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000원</strong><strong style='font-size:12px;color:#c00;'>[<span id='discount'>50</span>%]</strong>\n</a></td>";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:345px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img2.png' alt='' style='border:1px solid #e4e4e4;' />\n";
			category += "<p id='simple_desc' style='font-size:12px;color:#999;padding:8px 0 0;margin:0;'>제품 간략 설명</p>\n<h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding-bottom:8px;'>상품명</h2>\n";
			category += "<div id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000원</del></div>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000원</strong><strong style='font-size:12px;color:#c00;'>[<span id='discount'>50</span>%]</strong>\n</a></td>";
			category += "</tr>\n</table>\n</div>\n";
			break;
		case "product3":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;padding:10px 0;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;margin:0 auto;'>\n<tr>\n";
			category += "<td style='width:220px;vertical-align:top;'><a href='#' class='obj_edit' data-type='product2' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img3.png' alt='' style='border:1px solid #e4e4e4;' />\n";
			category += "<p id='simple_desc' style='font-size:12px;color:#999;padding:8px 0 0;margin:0;'>제품 간략 설명</p><h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding:8px 0 3px;'>상품명</h2>\n";
			category += "<span id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000</del></span>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000</strong><strong style='display:inline-block;padding:1px 4px;margin-left:5px;font-size:11px;border-radius:5px;background:#c00;color:#fff;'><span id='discount'>50</span>%</strong>\n</a></td>";
			category += "<td style='width:25px;'></td>\n";
			category += "<td style='width:220px;vertical-align:top;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img3.png' alt='' style='border:1px solid #e4e4e4;' />\n";
			category += "<h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding:8px 0 3px;'>상품명</h2>\n";
			category += "<span id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000</del></span>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000</strong><strong style='display:inline-block;padding:1px 4px;margin-left:5px;font-size:11px;border-radius:5px;background:#c00;color:#fff;'><span id='discount'>50</span>%</strong>\n</a></td>";
			category += "<td style='width:25px;'></td>\n";
			category += "<td style='width:220px;vertical-align:top;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img3.png' alt='' style='border:1px solid #e4e4e4;' />\n";
			category += "<h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding:8px 0 3px;'>상품명</h2>\n";
			category += "<span id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000</del></span>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000</strong><strong style='display:inline-block;padding:1px 4px;margin-left:5px;font-size:11px;border-radius:5px;background:#c00;color:#fff;'><span id='discount'>50</span>%</strong>\n</a></td>";
			category += "</tr>\n</table>\n</div>\n";
			break;
		case "product4":
			var category = "";
			category += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td class='bg_color' style='position:relative;width:180px;height:180px;padding:35px;background:#555;'>\n";
			category += "<a href='#' class='obj_edit' data-type='product2' style='display:block;width:100%;text-decoration:none;'><table cellpadding='0' cellspacing='0' border='0' width='100%'>\n";
			category += "<tr><td colspan='2' style='height:90px;vertical-align:top;'><h2 style='font-weight:bold;font-size:16px;color:#fff;margin:0;line-height:1.5;'>상품명이 긴 경우에는 줄바꿈이 일어납니다.</h2></td></tr>\n";
			category += "<tr><td style='height:90px;vertical-align:bottom;'><div id='cost' style='line-height:1;'><del style='font-size:12px;color:#dfdfdf;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#fff;'>15,000원</div></td>\n";
			category += "<td style='vertical-align:bottom;text-align:right;color:#c00;font-weight:bold;font-size:21px;line-height:34px;'><span id='discount' style='font-size:32px;'>50</span>%</td></tr>\n";
			category += "</table></a></td>\n";
			category += "<td style='width:250px;height:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "<td class='bg_color' style='position:relative;width:180px;height:180px;padding:35px;background:#555;'>\n";
			category += "<a href='#' class='obj_edit' data-type='product2' style='display:block;width:100%;text-decoration:none;'><table cellpadding='0' cellspacing='0' border='0' width='100%'>\n";
			category += "<tr><td colspan='2' style='height:90px;vertical-align:top;'><h2 style='font-weight:bold;font-size:16px;color:#fff;margin:0;line-height:1.5;'>상품명이 긴 경우에는 줄바꿈이 일어납니다.</h2></td></tr>\n";
			category += "<tr><td style='height:90px;vertical-align:bottom;'><div id='cost' style='line-height:1;'><del style='font-size:12px;color:#dfdfdf;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#fff;'>15,000원</div></td>\n";
			category += "<td style='vertical-align:bottom;text-align:right;color:#c00;font-weight:bold;font-size:21px;line-height:34px;'><span id='discount' style='font-size:32px;'>50</span>%</td></tr>\n";
			category += "</table></a></td>\n";
			category += "<tr><td style='width:250px;height:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "<td class='bg_color' style='position:relative;width:180px;height:180px;padding:35px;background:#555;'>\n";
			category += "<a href='#' class='obj_edit' data-type='product2' style='display:block;width:100%;text-decoration:none;'><table cellpadding='0' cellspacing='0' border='0' width='100%'>\n";
			category += "<tr><td colspan='2' style='height:90px;vertical-align:top;'><h2 style='font-weight:bold;font-size:16px;color:#fff;margin:0;line-height:1.5;'>상품명이 긴 경우에는 줄바꿈이 일어납니다.</h2></td></tr>\n";
			category += "<tr><td style='height:90px;vertical-align:bottom;'><div id='cost' style='line-height:1;'><del style='font-size:12px;color:#dfdfdf;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#fff;'>15,000원</div></td>\n";
			category += "<td style='vertical-align:bottom;text-align:right;color:#c00;font-weight:bold;font-size:21px;line-height:34px;'><span id='discount' style='font-size:32px;'>50</span>%</td></tr>\n";
			category += "</table></a></td>\n";
			category += "<td style='width:250px;height:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
			
			case "product5":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td ><div style='color:#fff; background-color:#c00; font-weight:bold;font-size:16px;  text-align:center; line-height:74px;width:60px;'><span id='discount' style='font-size:24px;'>50</span>%</div></td>\n";
			category += "<td style='width:230px; border-top:1px solid #e4e4e4;'><div style='line-height:1; '><h2 style='font-weight:bold;font-size:15px;color:#212121; padding-left:10px; margin:0;' >상품명</h2></div><div style='line-height:1;  '><p id='simple_desc' style='font-size:12px;color:#999; padding-left:10px; padding-top:4px;  margin:0;'>제품 간략 설명</p></div> </td>\n";
			category +="<td style='width:80px;  padding-right:10px;  border-top:1px solid #e4e4e4; text-align:right;'><div id='cost' style='line-height:1; '><del style='color:#999;font-size:11px;text-decoration:line-through; text-align:right;  padding-top:5px  '>30,000원</del></div><div id='cost' style='line-height:1;'><div id='price' style='font-weight:bold;font-size:15px;color:#212121; padding-bottom:7px; text-align:right; padding-top:5px'>15,000원</div></td></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td ><div style='color:#fff; background-color:#c00; font-weight:bold;font-size:16px; text-align:center;  line-height:74px;width:60px;'><span id='discount' style='font-size:24px;'>50</span>%</div></td>\n";
			category += "<td style='width:230px;  border-top:1px solid #e4e4e4;' ><div style='line-height:1; '><h2 style='font-weight:bold;font-size:15px;color:#212121; padding-left:10px;  margin:0;'>상품명</h2></div><div style='line-height:1;  '><p id='simple_desc' style='font-size:12px;color:#999; padding-left:10px; padding-top:4px; margin:0;'>제품 간략 설명</p></div> </td>\n";
			category +="<td style='width:80px;  padding-right:10px;  border-top:1px solid #e4e4e4; text-align:right;'><div id='cost' style='line-height:1; '><del style='color:#999;font-size:11px;text-decoration:line-through; text-align:right;  padding-top:5px  '>30,000원</del></div><div id='cost' style='line-height:1;'><div id='price' style='font-weight:bold;font-size:15px;color:#212121; padding-bottom:7px;  text-align:right; padding-top:5px'>15,000원</div></td></table>\n</a></td>\n";
			category +="<td style='width:80px;  padding-right:10px;  border-top:1px solid #e4e4e4; text-align:right;'><div id='cost' style='line-height:1; '><del style='color:#999;font-size:11px;text-decoration:line-through; text-align:right;  padding-top:5px  '>30,000원</del></div><div id='cost' style='line-height:1;'><div id='price' style='font-weight:bold;font-size:15px;color:#212121; padding-bottom:7px;  text-align:right; padding-top:5px'>15,000원</div></td></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";		
			break;
			
			case "product6":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr>";
			category += "<td style='width:240px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'>";
			category += "<img src='http://imgup.kidkids.net/mail/templete/dummy_img7.png' alt='' /><table cellpadding='0' cellspacing='0' border='0' width='100%'>";
			category += "<tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>3,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>1,000원</div></td></tr>";
			category += "</table></a></td><td style='width:15px;'></td>";
			category += "<td style='width:240px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'>";
			category += "<img src='http://imgup.kidkids.net/mail/templete/dummy_img7.png' alt='' /><table cellpadding='0' cellspacing='0' border='0' width='100%'>";
			category += "<tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>3,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>1,000원</div></td></tr>";
			category += "</table></a></td><td style='width:15px;'></td>";
			category += "<td style='width:240px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'>";
			category += "<img src='http://imgup.kidkids.net/mail/templete/dummy_img7.png' alt='' /><table cellpadding='0' cellspacing='0' border='0' width='100%'>";
			category += "<tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>3,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>1,000원</div></td></tr>";
			category += "</table></a></td></tr></table></div>";
			break;
		
		// Footer
		case "footer1":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:110px;padding:25px 10px 30px 25px;vertical-align:top;'><div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mono.png' alt=''/></div></td>\n";
			category += "<td style='padding:25px 25px 30px 15px;vertical-align:top;'><div class='obj_edit' data-type='text' style='color:#999;font-size:12px;line-height:1.5;'><span>본 메일은 발송 전용으로 키드키즈에서 메일 수신에 동의하신 회원님께만 발송되는 메일입니다.<br/>\n";
			category += "수신을 원치않을 경우 <strong>MY 키드키즈 > MY 기본정보 > 수신변경</strong>에서 수신여부를 체크하여 주세요.</span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#999;font-size:12px;margin-top:15px;line-height:1.5;'><span>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈<br/>대표이사 : 이희주 / 사업자등록번호 : 214-86-51854 / 통신판매업신고 : 제2016-용인수지-0297호<br/>고객센터 : 02-5880-115 / <a href='mailto:kidkids@kidkids.net'>kidkids@kidkids.net</a></span></div></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
			
		case "footer2":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:30px 0;border-top:2px solid #333;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
			category += "<td style='width:120px;vertical-align:top;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_footer.png' alt=''/></div>\n</td>";
			category += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;'><span>본 메일은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 시행규칙에 의거 <strong>"+year+"년 "+month+"월 "+day+"일</strong> 기준으로 회원님의 이메일 수신동의 여부를 확인한 결과 회원님께서 수신동의를 하셨기 때문에 발송하는 발신전용<br/>메일입니다.</span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>더 이상 수신을 원하지 않으시면 <a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>여기</a>를 클릭해주세요.<br/>(If you don't want to receive this e-mail any more, Click [<a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>HERE</a>])<br/><span style='color:#999;'>* 본 메일은 발신전용입니다. 문의가 있으신분은 <a href='mailto:kidkids@kidkids.net' target='_blank' style='text-decoration:underline;'>kidkids@kidkids.net</a>으로 문의 메일을 보내주십시오.</span></span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 214-86-51854&nbsp;&nbsp;&nbsp;통신판매업신고 : 제2016-용인수지-0297호<br/>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈,&nbsp;&nbsp;대표이사 : 이희주</span></div>\n";
			category += "</td>";
			category += "</tr>\n</table>\n</div>";
			break;
			
		case "footer3":
			var category = "";
			category += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:20px 0;border-top:2px solid #007dac;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
			category += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#999;font-size:12px;line-height:1.5;'><span>본 메일은 발신 전용으로 교원대상에게 각종 교육정보를 제공하기 위해 발송되고 있습니다.<br/>전송오류로 이메일을 잘못 전달받으셨거나 메일 수신을 원하기 않으시면 [<a href='http://www.edulove.co.kr/menu01/email_reject.php' target='_blank' style='text-decoration:underline;'>여기</a>]를 클릭해주세요.<br/>교원연수 관련 문의는 <a href='mailto:edulove@kyocom.co.kr' style='text-decoration:underline;'>edulove@kyocom.co.kr</a>(으)로 문의 메일을 보내주십시오.</span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 119-81-88861  /  통신판매업신고 : 제2016-용인수지-0301호<br/>경기도 용인시 수지구 신수로 767 유타워 A동 2103호 (주)교컴_교육사랑연수원<br/>대표이사 : 이희주  /  개인정보 보호책임자 : 박무성(<a href='mailto:pakms2000@kyocom.co.kr' style='text-decoration:underline;'>pakms2000@kyocom.co.kr</a>)<br/>Tel : 02-854-0251  /  Fax : 0303-0799-1624</span></div>\n";
			category += "</td>";
			category += "<td style='width:120px;vertical-align:bottom;text-align:right;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_footer_cert.png' alt=''/></div>\n</td>";
			category += "</tr>\n</table>\n</div>";
			break;
			
		// Full
		case "ad_letter1":
			var category = "";
			// Header
			category += "<div class='edit_wrap bg_color' style='background:#5bb901;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='text-align:left;padding:18px 15px;vertical-align:bottom;'>\n";
			category += "<div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/tit_ad_letter.png' alt='' /></div>\n";
			category += "<div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/tit_ad_letter_desc.png' alt=''/></div>\n";
			category += "</td>\n<td style='text-align:right;padding:18px 15px;'>\n";
			category += "<a href='http://www.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_2ton_wh.png' alt=''/></a>\n";
			category += "</td></tr>\n<tr>\n<td colspan='2'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='http://www.kidkids.net/eduinfo_new/eduplan_mon.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb1.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/eduinfo_new/data_list.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb2.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/eduinfo_new/poo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb3.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/eduinfo_new/multi/multi_list.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb4.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/kid_magazine/index.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb5.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.kidkids.net/ddoran/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb6.png' alt=''/></a></td>\n";
			category += "<td><a href='http://kas.kidkids.net/html/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb7.png' alt=''/></a></td>\n";
			category += "<td><a href='http://job.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb8.png' alt=''/></a></td>\n";
			category += "<td><a href='http://academy.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb9.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb10.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n";
			category += "</td>\n</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Footer
			category += "<div class='edit_wrap bg_color' style='background:#f5f5f5;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:110px;padding:25px 10px 30px 25px;vertical-align:top;'><div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mono.png' alt=''/></div></td>\n";
			category += "<td style='padding:25px 25px 30px 15px;vertical-align:top;'><div class='obj_edit' data-type='text' style='color:#999;font-size:12px;line-height:1.5;'><span>본 메일은 발송 전용으로 키드키즈에서 메일 수신에 동의하신 회원님께만 발송되는 메일입니다.<br/>\n";
			category += "수신을 원치않을 경우 <strong>MY 키드키즈 > MY 기본정보 > 수신변경</strong>에서 수신여부를 체크하여 주세요.</span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#999;font-size:12px;margin-top:15px;line-height:1.5;'><span>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈<br/>대표이사 : 이희주 / 사업자등록번호 : 214-86-51854 / 통신판매업신고 : 제2016-용인수지-0297호<br/>고객센터 : 02-5880-115 / <a href='mailto:kidkids@kidkids.net'>kidkids@kidkids.net</a></span></div></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			break;
			
		case "mall_letter1":
			var category = "";
			// Header
			category += "<div class='edit_wrap' style='padding-top:15px;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td colspan='5' rowspan='2' style='vertical-align:bottom;'><a href='http://mall.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_header.png' alt=''/></a>\n</td>";
			category += "<td colspan='4' style='text-align:right;'><div class='obj_edit' data-type='text'><span style='color:#76b809;font-size:21px;font-family:tahoma;'>"+year+"-"+month+"-"+day+"</span></div></td></tr>";
			category += "<tr><td colspan='4' style='text-align:right;vertical-align:bottom;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/desc_mall_header.png' alt='' /></div>\n</td></tr>";
			category += "<tr><td colspan='9' style='height:13px;'></td></tr>";
			category += "<tr><td><a href='http://mall.kidkids.net/html/make_moongoo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu1.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=8' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu2.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=3' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu3.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=2' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu4.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=4' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu5.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=5' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu6.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=1' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu7.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=7' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu8.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/welfare/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu9.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Product1
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Product1
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Product1
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Product1
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:500px;' colspan='2'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img6.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
			category += "<tr><td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
			category += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Footer
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:30px 0;border-top:2px solid #333;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
			category += "<td style='width:120px;vertical-align:top;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_footer.png' alt=''/></div>\n</td>";
			category += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;'><span>본 메일은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 시행규칙에 의거 <strong>"+year+"년 "+month+"월 "+day+"일</strong> 기준으로 회원님의 이메일 수신동의 여부를 확인한 결과 회원님께서 수신동의를 하셨기 때문에 발송하는 발신전용<br/>메일입니다.</span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>더 이상 수신을 원하지 않으시면 <a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>여기</a>를 클릭해주세요.<br/>(If you don't want to receive this e-mail any more, Click [<a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>HERE</a>])<br/><span style='color:#999;'>* 본 메일은 발신전용입니다. 문의가 있으신분은 <a href='mailto:kidkids@kidkids.net' target='_blank' style='text-decoration:underline;'>kidkids@kidkids.net</a>으로 문의 메일을 보내주십시오.</span></span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 214-86-51854&nbsp;&nbsp;&nbsp;통신판매업신고 : 제2016-용인수지-0297호<br/>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈,&nbsp;&nbsp;대표이사 : 이희주</span></div>\n";
			category += "</td>";
			category += "</tr>\n</table>\n</div>";
			break;
			
		case "mall_letter2":
			var category = "";
			// Header
			category += "<div class='edit_wrap' style='padding-top:15px;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td colspan='5' rowspan='2' style='vertical-align:bottom;'><a href='http://mall.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_header.png' alt=''/></a>\n</td>";
			category += "<td colspan='4' style='text-align:right;'><div class='obj_edit' data-type='text'><span style='color:#76b809;font-size:21px;font-family:tahoma;'>"+year+"-"+month+"-"+day+"</span></div></td></tr>";
			category += "<tr><td colspan='4' style='text-align:right;vertical-align:bottom;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/desc_mall_header.png' alt='' /></div>\n</td></tr>";
			category += "<tr><td colspan='9' style='height:13px;'></td></tr>";
			category += "<tr><td><a href='http://mall.kidkids.net/html/make_moongoo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu1.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=17' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu2.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=8' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu3.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=3' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu4.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=2' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu5.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=4' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu6.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=5' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu7.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/html/category.htm?cat=1' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu8.png' alt=''/></a></td>\n";
			category += "<td><a href='http://mall.kidkids.net/welfare/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu9.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Product1
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Product1
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Product1
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Product1
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Product1
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "<td style='width:20px;'></td>\n";
			category += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
			category += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
			category += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
			category += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
			category += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Footer
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:30px 0;border-top:2px solid #333;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
			category += "<td style='width:120px;vertical-align:top;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_footer.png' alt=''/></div>\n</td>";
			category += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;'><span>본 메일은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 시행규칙에 의거 <strong>"+year+"년 "+month+"월 "+day+"일</strong> 기준으로 회원님의 이메일 수신동의 여부를 확인한 결과 회원님께서 수신동의를 하셨기 때문에 발송하는 발신전용<br/>메일입니다.</span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>더 이상 수신을 원하지 않으시면 <a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>여기</a>를 클릭해주세요.<br/>(If you don't want to receive this e-mail any more, Click [<a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>HERE</a>])<br/><span style='color:#999;'>* 본 메일은 발신전용입니다. 문의가 있으신분은 <a href='mailto:kidkids@kidkids.net' target='_blank' style='text-decoration:underline;'>kidkids@kidkids.net</a>으로 문의 메일을 보내주십시오.</span></span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 214-86-51854&nbsp;&nbsp;&nbsp;통신판매업신고 : 제2016-용인수지-0297호<br/>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈,&nbsp;&nbsp;대표이사 : 이희주</span></div>\n";
			category += "</td>";
			category += "</tr>\n</table>\n</div>";
			break;
		
		case "edulove_letter1":
			var category = "";
			// Header
			category += "<div class='edit_wrap bg_color' style='background-color:#ffffff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td style='padding:20px 10px 15px;'><a href='http://www.edulove.co.kr/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/edulove_top_logo.png' alt=''/></a>\n</td>";
			category += "<td style='text-align:right;padding:20px 10px 15px;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_top_cert.png' alt='' /></div>\n</td></tr>";
			category += "<tr><td colspan='2' style='line-height:0;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_bg_header_line.png' alt='' /></div></td></tr>";
			category += "</table>\n</div>\n";
			// Contents
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
			category += "</tr>\n</table>\n</div>\n";
			category += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			category += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
			category += "<td><a href='http://www.edulove.co.kr/menu01/menu01.php' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu1.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.edulove.co.kr/menu02/menu01_1.php' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu2.png' alt=''/></a></td>\n";
			//category += "<td><a href='http://mall.edulove.co.kr/' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu3.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.edulove.co.kr/menu03/main.php' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu4.png' alt=''/></a></td>\n";
			category += "<td><a href='http://www.edulove.co.kr/menu08/menu01.php' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu5.png' alt=''/></a></td>\n";
			category += "<tr><td colspan='5'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_logo.png' alt='' /></div></td></tr>\n";
			category += "</tr>\n</table>\n</div>\n";
			// Footer
			category += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:20px 0;border-top:2px solid #007dac;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
			category += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#999;font-size:12px;line-height:1.5;'><span>본 메일은 발신 전용으로 교원대상에게 각종 교육정보를 제공하기 위해 발송되고 있습니다.<br/>전송오류로 이메일을 잘못 전달받으셨거나 메일 수신을 원하기 않으시면 [<a href='http://www.edulove.co.kr/menu01/email_reject.php' target='_blank' style='text-decoration:underline;'>여기</a>]를 클릭해주세요.<br/>교원연수 관련 문의는 <a href='mailto:edulove@kyocom.co.kr' style='text-decoration:underline;'>edulove@kyocom.co.kr</a>(으)로 문의 메일을 보내주십시오.</span></div>\n";
			category += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 119-81-88861  /  통신판매업신고 : 제2016-용인수지-0301호<br/>경기도 용인시 수지구 신수로 767 유타워 A동 2103호 (주)교컴_교육사랑연수원<br/>대표이사 : 이희주  /  개인정보 보호책임자 : 박무성(<a href='mailto:pakms2000@kyocom.co.kr' style='text-decoration:underline;'>pakms2000@kyocom.co.kr</a>)<br/>Tel : 02-854-0251  /  Fax : 0303-0799-1624</span></div>\n";
			category += "</td>";
			category += "<td style='width:120px;vertical-align:bottom;text-align:right;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_footer_cert.png' alt=''/></div>\n</td>";
			category += "</tr>\n</table>\n</div>";
			break;
	}
	return category;
}