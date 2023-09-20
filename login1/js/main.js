// function click() {
// 	alert('谢绝复制！请谅解！')
// }

// function clickl() {
// 	if (event.button == 2) {
// 		alert('谢绝复制！请谅解！')
// 	}
// }

// function ctrlkeydown() {
// 	if (event.ctrlkey) {
// 		alert('不当的拷贝将损坏您的爱机！')
// 	}
// }

// document.οnkeydοwn = ctrlkeydown;

// document.onselectstart = click;

// document.οnmοusedοwn = clickl;





/* 调用回车onkeydown="keyLogin();"   id="input1"*/
function keyLogin(){
		  if (event.keyCode==13)   //回车键的键值为13
		     document.getElementById("input1").click();  //调用登录按钮的登录事件
		}





//如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面 
var h = window.innerHeight,
	w = window.innerWidth;
window.onresize = function() {
	if (h != window.innerHeight || w != window.innerWidth) {
		window.close();
		window.location = "about:blank";
	}
}
// 1.禁用右键菜单
document.oncontextmenu = new Function("event.returnValue=false");
// 2.禁用鼠标选中
document.onselectstart = new Function("event.returnValue=false");

document.onkeydown = () => {
	console.log(window.event.keyCode);
	// 禁用单独键
	for (let i = 16; i < 47; i++) {
		if (window.event && window.event.keyCode == i) {
			return false;
		}
	}
	for (let i = 58; i < 65; i++) {
		if (window.event && window.event.keyCode == i) {
			return false;
		}
	}
	for (let i = 91; i < 300; i++) {
		if (window.event && window.event.keyCode == i) {
			return false;
		}
	}
	// 禁用ctrl+shift+其他
	for (let i = 1; i < 300; i++) {
		if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == i) {
			return false;
		}
	}
	// // 禁用ctrl+其他
	for (let i = 1; i < 300; i++) {
		if (window.event.ctrlKey &&  window.event.keyCode == i) {
			return false;
		}
	}
	// 禁用ctrl+shift+其他
	// if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == i 254) {
	// 	return false;
	// }
	if (window.event.shiftKey) {
		return false;
	}
	// // 禁用ctrl+其他
	// if (window.event.ctrlKey && 1<= window.event.keyCode <= 254) {
	// 	return false;
	// }

}


// event.keycode值大全

// 1 keycode 8 = BackSpace BackSpace

// 2 keycode 9 = Tab Tab

// 3 keycode 12 = Clear

// 4 keycode 13 = Enter

// 5 keycode 16 = Shift_L

// 6 keycode 17 = Control_L

// 7 keycode 18 = Alt_L

// 8 keycode 19 = Pause

// 9 keycode 20 = Caps_Lock

// 10 keycode 27 = Escape Escape

// 11 keycode 32 = space space

// 12 keycode 33 = Prior

// 13 keycode 34 = Next

// 14 keycode 35 = End

// 15 keycode 36 = Home

// 16 keycode 37 = Left

// 17 keycode 38 = Up

// 18 keycode 39 = Right

// 19 keycode 40 = Down

// 20 keycode 41 = Select

// 21 keycode 42 = Print

// 22 keycode 43 = Execute

// 23 keycode 45 = Insert

// 24 keycode 46 = Delete

// 25 keycode 47 = Help

// 26 keycode 48 = 0 equal braceright

// 27 keycode 49 = 1 exclam onesuperior

// 28 keycode 50 = 2 quotedbl twosuperior

// 29 keycode 51 = 3 section threesuperior

// 30 keycode 52 = 4 dollar

// 31 keycode 53 = 5 percent

// 32 keycode 54 = 6 ampersand

// 33 keycode 55 = 7 slash braceleft

// 34 keycode 56 = 8 parenleft bracketleft

// 35 keycode 57 = 9 parenright bracketright

// 36 keycode 65 = a A

// 37 keycode 66 = b B

// 38 keycode 67 = c C

// 39 keycode 68 = d D

// 40 keycode 69 = e E EuroSign

// 41 keycode 70 = f F

// 42

// 43 keycode 71 = g G

// 44 keycode 72 = h H

// 45 keycode 73 = i I

// 46 keycode 74 = j J

// 47 keycode 75 = k K

// 48 keycode 76 = l L

// 49 keycode 77 = m M mu

// 50 keycode 78 = n N

// 51 keycode 79 = o O

// 52 keycode 80 = p P

// 53 keycode 81 = q Q at

// 54 keycode 82 = r R

// 55 keycode 83 = s S

// 56 keycode 84 = t T

// 57 keycode 85 = u U

// 58 keycode 86 = v V

// 59 keycode 87 = w W

// 60 keycode 88 = x X

// 61 keycode 89 = y Y

// 62 keycode 90 = z Z

// 63 keycode 96 = KP_0 KP_0

// 64 keycode 97 = KP_1 KP_1

// 65 keycode 98 = KP_2 KP_2

// 66 keycode 99 = KP_3 KP_3

// 67 keycode 100 = KP_4 KP_4

// 68 keycode 101 = KP_5 KP_5

// 69 keycode 102 = KP_6 KP_6

// 70 keycode 103 = KP_7 KP_7

// 71 keycode 104 = KP_8 KP_8

// 72 keycode 105 = KP_9 KP_9

// 73 keycode 106 = KP_Multiply KP_Multiply

// 74 keycode 107 = KP_Add KP_Add

// 75

// 76 keycode 108 = KP_Separator KP_Separator

// 77 keycode 109 = KP_Subtract KP_Subtract

// 78 keycode 110 = KP_Decimal KP_Decimal

// 79 keycode 111 = KP_Divide KP_Divide

// 80 keycode 112 = F1

// 81 keycode 113 = F2

// 82 keycode 114 = F3

// 83 keycode 115 = F4

// 86 keycode 116 = F5

// 87 keycode 117 = F6

// 88 keycode 118 = F7

// 89 keycode 119 = F8

// 90 keycode 120 = F9

// 91 keycode 121 = F10

// 92 keycode 122 = F11

// 93 keycode 123 = F12

// 94 keycode 124 = F13

// 95 keycode 125 = F14

// 96 keycode 126 = F15

// 97 keycode 127 = F16

// 98 keycode 128 = F17

// 99 keycode 129 = F18

// 100 keycode 130 = F19

// 101 keycode 131 = F20

// 102 keycode 132 = F21

// 103 keycode 133 = F22

// 104 keycode 134 = F23

// 105 keycode 135 = F24
function login() {
	// 获取输入的用户名和密码
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// 判断用户名和密码是否正确，此处假设为 test/test
	if (username == "xiedubing" || "dengxingping" && password == "727728") {
		// 登录成功，跳转到另一个页面
		window.location.href = "https://www.baidu.com";
	}else {
		// 登录失败，给出提示
		alert("请输入正确的账号密码!");
	}
}

// 106 keycode 136 = Num_Lock

// 107 keycode 137 = Scroll_Lock

// 108 keycode 187 = acute grave

// 109 keycode 188 = comma semicolon

// 110 keycode 189 = minus underscore

// 111 keycode 190 = period colon

// 112 keycode 192 = numbersign apostrophe

// 113 keycode 210 = plusminus hyphen macron

// 114 keycode 211 =

// 	115 keycode 212 = copyright registered

// 116 keycode 213 = guillemotleft guillemotright

// 117 keycode 214 = masculine ordfeminine

// 118 keycode 215 = ae AE

// 119 keycode 216 = cent yen

// 120 keycode 217 = questiondown exclamdown

// 121 keycode 218 = onequarter onehalf threequarters

// 122 keycode 220 = less greater bar

// 123 keycode 221 = plus asterisk asciitilde

// 124 keycode 227 = multiply division

// 125

// 126 keycode 228 = acircumflex Acircumflex

// 127 keycode 229 = ecircumflex Ecircumflex

// 128 keycode 230 = icircumflex Icircumflex

// 129 keycode 231 = ocircumflex Ocircumflex

// 130 keycode 232 = ucircumflex Ucircumflex

// 131 keycode 233 = ntilde Ntilde

// 132 keycode 234 = yacute Yacute

// 133 keycode 235 = oslash Ooblique

// 134 keycode 236 = aring Aring

// 135 keycode 237 = ccedilla Ccedilla

// 136 keycode 238 = thorn THORN

// 137 keycode 239 = eth ETH

// 138 keycode 240 = diaeresis cedilla currency

// 139 keycode 241 = agrave Agrave atilde Atilde

// 140 keycode 242 = egrave Egrave

// 141 keycode 243 = igrave Igrave

// 142 keycode 244 = ograve Ograve otilde Otilde

// 143 keycode 245 = ugrave Ugrave

// 144 keycode 246 = adiaeresis Adiaeresis

// 145 keycode 247 = ediaeresis Ediaeresis

// 146 keycode 248 = idiaeresis Idiaeresis

// 147 keycode 249 = odiaeresis Odiaeresis

// 148 keycode 250 = udiaeresis Udiaeresis

// 149 keycode 251 = ssharp question backslash

// 150 keycode 252 = asciicircum degree

// 151 keycode 253 = 3 sterling

// 152 keycode 254 = Mode_switch
