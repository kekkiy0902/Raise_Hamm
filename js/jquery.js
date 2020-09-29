/*スマホ画面では、ヘッダーメニューをハンバーガーにする*/
$(function(){
        $("#open").show();
        $("#close").hide();
    // アイコンをクリック
	$("#open").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").hide();
        $("#close").show();
	});
        
    // アイコンをクリック
	$("#close").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").show();
        $("#close").hide();
	});
	
});

/*codeタグを特殊文字化*/
var code = $('code');
code.html(code.html().replace(/</g,'&lt;').replace(/>/,'&gt;'));