// 3 cách làm đồng bộ -> nhắc demo
// 1. callback function ( của js thuần ES5)
// 2. promise ( ES6)
// 3. Asyn Await (ES8)

// thư viện quay 360 độ hình ảnh - xem xe?
// tìm có dấu?
// check validation - pass có in hoa, ký tự đặc biệt, ko có khoảng trắng... - account ko có ký tự đặc biệt, ko khoảng trắng
// giỏ hàng thực tế lưu API?

// qusetion?: truong hop 2 ng lam cung 1 chuc nang: ( github kiem tra trung dua theo ten ham hay ten file hay j?)
// tại sao xung đột??? dựa trên cơ chế nào??? dấu hiệu nào?

// những function, tính chất nào sẽ được chạy luôn trong call stack, những cái nào đc đưa vào queue meassage (hay callback queue)???
//MVC model view controller
// cau truc: folder vscode app asset???
// format number to money js?
// check validation - account - ko dấu, ko ký tự đặc biệt - ko khoảng trắng .v.v
/*
queue -> thằng nào xong đầu tiên -> sẽ trả về đầu tiên và xử lý đầu tiên -> check lại???

callback function: function A là tham số của function khác -> function A là callback function
 - cách 1: viet thẳng function ko tên
 - cách 2: tạo 1 hàm ngoài, gọi tên hàm đó vào

promise???
bất đồng bộ??? setTimeout, function phụ thuộc mạng -> truyền vào queue
hỏi lại cách debug??
API??? cầu nối BE - FE
thực tế BE cung cấp API như nào?? thao tác như nào?
NẾu BE cung cấp API tìm kiếm ( gõ 1 ký lần gọi API 1 lần ) -> làm thực tế -> tự cho 1 khoảng time, vd chữ Dương Nhã mất 3s để gọi - thì tự quy định 3s mới gọi
 - tìm kiếm front end - gọi dưới client
 *kiến thức API còn những gì nữa???

method add thêm item vào mảng theo vị trí k chỉ định ( push chỉ thêm cuối mảng)??

localStorage giới hạn dung lượng, chỉ lưu key -> thực tế lưu những j ở localStorage

F8: đến breakpoint tiếp theo
F11: đi từng dòng code
F10???

tìm kiếm có dấu - ko dấu??

bất đồng bộ
js hoạt đồng
san pham - gọi API đến server để lấy sản phẩm
nếu ko bất đồng bộ -> phải tốn nhiều time đợi xử lý hết từng dòng mục của server -> chờ rất lạu
đụng đến service - server đều bất đồng bộ ( dù mạng 0s)

call stack ->  những hàm thực hiện ngay sẽ đc nạp trực tiếp vào callstack ( ko dính đến network, delay, setTimeout(0s vẫn log sau, vẫn chuyển vào queue ), axios service)

first in - first out ( check chỗ này )
log 1: -> ra 1 trước
log 2: -> ra 2 trước
-> viết hàm bình thường cũng thế

***những thằng gọi đến service luôn chạy sau những lệnh js (console.log)

Node API: ( check lại tên )
chưa những thằng bất đồng bộ

callback queue
thứ tự nạp từ queue vào stack dựa vào gì?? ( dựa vào thứ tự nạp vào que hay dựa vào thời gian xử lý xong queue???) - check thử = setTimeout

-> chạy hết call stack -> đưa ra Node API -> đưa ra callback queue

event loop: rs liên tục, kiểm tra callstack có gì không -> sau khi callstack trống -> mới nạp queue vào callstack để chạy

test lai
//forEach: thao tac truc tiep cac phan tu mang -> ko tra ve
//map: tim kiem phan tu, kiem tra .v.v -> tra ve
/*
Những gì forEach() làm được thì map() cũng có thể làm được và ngược lại.
map() cấp phát bộ nhớ và lưu trữ các giá trị trả về, forEach() thì bỏ qua các giá trị trả về
forEach() cho phép gọi hàm callback để thay đổi mảng hiện tại, thay vào đó map() sẽ trả về một mảng mới.

//kien thuc js
// có thể cho biến / (obj.) = hàm ->(gán hàm vào biến) -> xem biến là tên hàm
let x = function () {...} //-> gọi hàm x();
*/
// duong dan tuyet doi va tuong doi - > live server? ( sao type-module ko chay dc tren duong dan tuyet doi)





//TODO: ES6 buổi 2 
/*
cài thư viện, làm đúng step: npm init -> npm install <tên thư viện...>
tìm hiểu package management



cau truc folder:
 - utils: lien quan service
 - constant: chứa các hằng số -  ( config.js -> chứa biến liên quan config)
 - models: tat ca lien quan doi tuong co' field

//uy quyen ve cho window (BOM)

//other
tim hieu ve MVC -> cau truc thu muc
// nhúng popper -> vào folder umd (nếu ko vào đến umd sẽ lỗi)
đường dẫn về folder gốc?
 - van de bao mat - link API dang bi dung` chung??
 - cớ chế token ( chuoi ma hoa) khi dung API - bao mat (token - BE làm)
  - lazyload: load 1 -> an xem them load tiep
  - innerHTML: bo het cai cu~ lam lai moi - append: them cai moi' vao

  refactor code -> sau khi làm
  - tim hieu null, undefined ??


   */

/*

FIXME: trong cặp thẻ html -> ko dùng for if ... đc -> giải quyết sao?? <div>for...</div> ko đc
co' cach nao goi for - if trong cap the <div></div> ????



*/

// canvas va svg???

/*
react buổi 3:
props:
truyen du lieu, truyen tu component cha sang component con
cha truyen prop ten j -> thi con xai prop dung' ten do
co' quan he: -> vi component Props dang chua com classProp ( nen co quan he cha con )
 - class: có san thuoc tinh props cua class COmponent -> nen dung dc this.props
 - function: phai chuyen props vao function ( props lam doi' so agrument) -> dung props ( ko this. )

 postman support chuyen tu key:value -> json

 anfn -> viet tat arrow function?
 
 rtuyen vao cung co prop -> lay ra cung co props


từ cha truyền vào con -> thi làm binh thường.

từ con truyền về cha (cha truyen vao 1 props mang value la ham -> va ham do hung du lieu lay tu con)

handle su kien co 1 dong -> viet tat: (ko can khoi tao 1 ham tren) -> goi triuc tiep ...



// viet tat: khi handle co 1 dong: ko can tao ham conDetail
    // onClick={() => this.props.chaDetail(product)}
 */

 /* 
khi truyen props tu cha qua con ( file con se co 1 thuoc tinh this.props.nameVuaDuocTruyenBenCha)

 dsspSanPham ( prop SanPham truyen tu dssp)
 truyen 3 cap
 b1 truyen prop array tu index -> qua danhsach-sp 
 b2 nhan props mang -> renderHTML theo array vua nhan dc tu indedx -> roi truyen prop item (tung item trong array) tu dssp -> file san pham
 b3: vao sanpham nhan lai prop

 
 
 state va prop khac nhau
  - state chi chua o com con
  - con moi co prop, cha ko co prop (component lon' nhat ko co nhan prop, no chi truyen prop di)



  Ttruyen props tu cha -> con ( truyen prop - obj)
  lay props tu con -> cha ( truyen function - function co tham so ( tham so la prop lay tu con))


  
  
  
 */

 /*
 react Buoi 4:

gio hang khi F5 se bien' mat? nho' hoi xu ly vu nay (thuc te se luu = API)

form trong react ko dc gan' truc tiep gia tri -> phai dung onChange{this.nameFunction}
trong react - xai form -> can  co state ( phai tao ra state) ( co except)  (de chuyen ra state cua index ?)

multi -> cap nhat 1 lan -> apply cho tat ca state con lai
 - [name]: value

 form co su kien Onsubmit (dung cach binh thuong onLick van dc)

.preventDefault(); -> ko cho load lai trang ( ham cua js thuan)

Math.random(); ham cua js

onClick={() => this.props.delete(user)}: vi chi day props ra index lai nen viet gon 1 dong arrow function ko ten
 -> neu nhiu dong hon. nhiu code hon -> phai tao 1 ham cung cap render()
 

 xoa': why phai copy ra mang moi roi moi xoa? (test thu xoa truc tiep van dc ) - vi tranh' thay doi truc tiep gia tri cua array ban dau


 test xem moi khi set state -> web render lai phan nao?
 
de trung ten ham` -> sai ( why sai?) =>html ban dau van ra -> nhung click chu nang ti bao loi???

dung function thuong -> ko hieu this - - - dung arrow function moi hieu this ( luu y dieu nay khi dung this mà gap loi undefined)

TODO: hoi lai cho multi???   (Computed property names - cho phép tính toán ra tên thuộc tính)
?? this.setState({
      [name]: value
    })

  */

  /* 
  react buoi 5
  ***mỗi khi mún hiện thị - thay đổi data hiện thị
  -> tạo 1 state cho nó, để setState

  this.props.userEdit && "Edit User" || !this.props.userEdit && 'Add user'
  
  lifecycle: vòng doki962 comp -> tu luc tao ra den khi mat di
  constructor chi chay 1 lan duy nhat ??? check lai
  componentDidmount chi chay 1 lan 
  componentWIllReceiveProps: props thay doi se chay ( cha co thay doi, turyen vao con, con se chay lai)

  null?
  rõng thi dieu kien if la j???
    

  redux: thu vien rieng, ( ko phai cua react )
  npm install redux --save
  npm install react-readux --save

  action: thuc hien hanh dong j do
  reduder:
   - root 
   - child
  store: chua du lieu, quan ly tat ca state

  setup la mặc định: nhung lan sau chi can copy ko can code
   - index.js: 
    + import {createStore} from "redux";
    + import {Provider} from "react-redux" ( de connect )
    const store = createStore();
    ....theo slide

    2 thuoc tinh quan trong: getState (action) - dispatch

    action: muon lay danh sach -> truyen len 1 function action )(ten j cung dc)??

    chuyen state sang prop: muon xai dc phai xai = prop, nen phai chuyen state sang prop/ why????
    
    dispacth: mang action len state
    
  */

  /*
  react buoi 6
redux chi de truyen du` lieu??? hay con lam j khac ??
getState truyen state cho cac component con ( connect lam getState)
subcribe -> setState lai ( lang nghe su kien - thay doi set state lai)
tim hieu HOC
higher order function: function nhan vao 1 function -> tra ra 1 function

tai sao phai chuyen tu state tren store sang prop?? -> co cach nao lay truc tiep state de xai

(đã test đoạn dưới)
componentWillReceiveProps (chỉ chạy khi prop thay đổi) -> chay khi component nhan dc prop moi ( thay doi prop, chu lan dau tien co prop truyen vao no' k chay, chi chay khi prop thay doi)
 -> tu dong truyen vao 1 agrument -> gia tri cua agr là tất cả những prop lấy từ mapStateToProps ()
  -> sau khi nhan dc prop co the setState lai
   -> will chay truoc khi render (cùng in this.prop -> nhưng this.prop trong will giá trị trước this.prop trong render) (nextProp (agrument) trong will và this.prop trong render giống nhau)
    -> vì vậy, nếu dùng this.prop trong Will sẽ không chính xác (data cũ) - mà phài dùng nextProp (agrument) -> nextProp này sẽ là giá trị prop tại thời điểm hiện tại
      ->***: willReceiveProps chỉ chạy 1 lần khi prop thay đổi (tự động chạy - ko cần gọi) và chạy trước khi render (đã test)

    TODO:***check lai doan nay: trong bai edit user -> muc dich goi willReceive la de setState cua input (vi se lay state input gan' lam value), neu setState binh thuong se chay vo tan
    -> nen dung willReceive de chay 1 lan ( vi willReceive chay truoc khi render)
    TODO: ko goi 1 hàm-(tự thực thi "tên hàm có dầu ()") có setState trực tiếp trong render -> ma phai goi ham co setState thong qua 1 button or input (chì setState khi click,or change.."tên hàm ko()" ) ( thong qua su kien, change. click -> neu ko se chay vo tan)
    
    


tai sao cu phai copy 1 mang moi tu state -> ko edit truc tiep state?


tai sao phai chuyen tu state tren store sang prop?? -> co cach nao lay truc tiep state de xai
phai lay prop ko lay state truc tiep -> vi ko 


ngam cuu lai luong` di cua dispatch - mapStateToProp

    // redux chi chay khi -> (ham thuan - pure function) ko thay doi gia tri truyen vao
nhan biet su thay = dua tren gia tri tham chieu -> khi tham chieu thay doi, thi redux moi set state lai -> tham chieu chi thay doi khi clone state khac

toan bo khuyen -> ko nen thay doi -> toan bo viet theo pure function -> toan clone ra


mapStateToProp: mang 2 gia tri - getState - Subcribe,
getSate: lay gia tri tuc thoi
\Sbucribe lay gia t4ri khi state thay doi
neu lay binh thuong,-> phai xai ham getState -> khi state thay doi phai xai ham subcribe



viet code -> nhung thang ko thay doi ko render lai

redux nang cao: chia file- de quan ly

CONNECT 2 THAM SO: getState, dispatch

extension:
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());// ko truyen tham so - ko co j trong store

tự sum:
 - vừa mở web lên - connect chạy -> lấy đc state từ store -> chuyển qua prop -> đã log dc props
 - 


  // action.user.id = state.userList.length++;
  // action.user.id = state.userList.length + 1;

  */

  /*
  react buoi 7:
  có khác nhau ko?
  action.user.id = state.userList.length++;
  action.user.id = state.userList.length + 1;
  
  return {...state} là sao?? -> cái redux này nó setState lúc nào?? mà biết render lại ?
  
  viet for trong jsx <div></div>?
  khac nhau giua state va props? -> khi nao dung state khi nao dung props

  lifecycle
  validation

  lifecycle:
  viet stateful


lifecycle -> ko quan trong thu tu viet code
  chay theo vong doi -> ko phai chay theo thu tu tu tren xuong
  
  constructor -> willMount -> render -> didMount

  thu tu khi co update
   willUpdate -> render -> didUpdate




  
  muon lam viec gi phai cho html chay xong -> viet trong didMount

  setState -> ko cho render lai -> shouldUpdate


  
    constructor - willMount - didMount -> chi chay 1 lan duy nhat (khi component dc khoi tao)
    khi setState -> nhung comp update chay

    nhan prop = componentWillReceiveProp

    chi render nhung comps thay doi -> 

    pureComponent -> cha render lai -> pureComponent ko render lai (dung cho nhung thang ko thay doi)


    form validation:
    
    tim hieu thuoc tinh remove - de bien mat luon tag html
    
    
    
    
    react - thu vien -> nen can nhiu thu vien khac tich hop
    angular framework -> co san cac thu vien 
    
    
    
  */