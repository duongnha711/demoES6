# es6
//TODO:
// 3 cách làm đồng bộ -> nhắc demo
// 1. callback function ( của js thuần ES5)
// 2. promise ( ES6)
// 3. Asyn Await (ES8)

// qusetion?: truong hop 2 ng lam cung 1 chuc nang: ( github kiem tra trung dua theo ten ham hay ten file hay j?)
// tại sao xung đột??? dựa trên cơ chế nào??? dấu hiệu nào?

//MVC model view controller
// cau truc: folder vscode app asset???
// format number to money js?
// check validation - account - ko dấu, ko ký tự đặc biệt - ko khoảng trắng .v.v
/*


hỏi lại cách debug??
F8: đến breakpoint tiếp theo
F11: đi từng dòng code
F10???

API??? cầu nối BE - FE
thực tế BE cung cấp API như nào?? thao tác như nào?
NẾu BE cung cấp API tìm kiếm ( gõ 1 ký lần gọi API 1 lần ) -> làm thực tế -> tự cho 1 khoảng time, vd chữ Dương Nhã mất 3s để gọi - thì tự quy định 3s mới gọi
 - tìm kiếm front end - gọi dưới client
 *kiến thức API còn những gì nữa???

method add thêm item vào mảng theo vị trí k chỉ định ( push chỉ thêm cuối mảng)??

tìm kiếm có dấu - ko dấu??

Node API: ( check lại tên )
chưa những thằng bất đồng bộ



test lai
//forEach: thao tac truc tiep cac phan tu mang -> ko tra ve
//map: tim kiem phan tu, kiem tra .v.v -> tra ve
/*
Những gì forEach() làm được thì map() cũng có thể làm được và ngược lại.
map() cấp phát bộ nhớ và lưu trữ các giá trị trả về, forEach() thì bỏ qua các giá trị trả về
forEach() cho phép gọi hàm callback để thay đổi mảng hiện tại, thay vào đó map() sẽ trả về một mảng mới.
*/


//TODO:
/* 
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





Trang 10
/*
của JS
TODO: pure function của JS: ( react và redux tuân thủ pure function )
-   kết quả chỉ phụ thuộc vào agrument truyền vào và biến đc khai báo trong hàm (ko phụ thuộc biến khai báo ngoài hàm) -> Trả cùng kết quả khi truyền cùng input
-   Ko thay đổi dữ liệu bên ngoài phạm vi hoạt động của nó, ko làm ảnh hưởng đến các đối tượng khác ngoài hàm
-   ko tạo side effect?
    + side effect: sự tương tác nào với bên ngoài từ bên trong hàm ví dụ như việc thay đổi giá trị biến ở bên ngoài hàm hay gọi hàm khác từ bên trong hàm (trừ khi hàm được gọi cũng pure).

xây dựng hàm dùng pure để hạn chế bug, để dễ test, code chất lượng ... vì các đặc tính bên ngoài ko ảnh hưởng đến hàm
vd:
let tax = 0.1;
let price = 100;
const getPrice = (price, tax) => price + (price*tax); // -> pure, vì result phụ thuộc hoàn toàn vào arg: price và tax (chỉ phụ thuộc vào agrument và biến khai báo trong hàm)
const getPrice = price => price + (price*tax); // impure -> vì result bị ảnh hưởng bởi biến khai báo bên ngoài hàm

TODO:Trong JavaScript true && 'Hello World' luôn trả về ‘Hello World’. Còn false && 'Hello World' luôn trả về false.
-> rất hay -> vd: isValid && <Component /> (nếu isValid là true -> thì hiện ra Component -> nếu false ko hiện j cả -> trả về false)

TODO: Higher order function: là 1 hàm, nhận hàm như đối số và có thể trả về hàm dưới dạng đầu ra. ( 1 trong 2 gọi điều kiện xày ra gọi là HOF)
Biết cách sử dụng function (hàm) như data và tăng cường khả năng mở rộng của nó là đặc điểm được nhắc đến nhiều nhất của higher order function trong Javascript.
    -   Functional program: truyền hàm như tham số (callback) -> trả về hàm dạng giá trị

    - First class function: làm là đối tượng, có thể truyền như tham số, gán vào biến...

callback là hàm đc truyền vào hàm khác như đối số. -> hàm là đối số -> là hàm callback

   Khi đó, nếu ta chỉ đơn thuần gọi tên hàm doSomething mà không có cặp dấu ngoặc, thì đơn thuần là ta vừa gọi tới định nghĩa của hàm,
    khi ta gọi doSomething() – có cặp dấu ngoặc – thì khi đó hàm mới được thực thi.
    Vì thế, khi ta truyền hàm đi, ta chỉ đơn thuần sử dụng tên hàm mà không có dấu ngoặc – tức là chỉ truyền đi định nghĩa hàm
     – có định nghĩa của hàm thông qua tham số rùi, thì hàm higher-order muốn sử dụng callback lúc nào cũng được
      -> (kích hoạt bằng cách thêm cặp dấu ngoặc).


TODO: cách hoạt động reduce:
Array.prototype.reduce
Phương thức reduce() thực thi hàm callback trên mỗi phần tử của mảng gọi dẫn đến một đầu ra duy nhất. Phương thức reduce chấp nhận 2 tham số: 1) Hàm reducer (callback) 2) Một optional initialValue.

Hàm reducer (callback) chấp nhận 4 tham số: accumulator, currentValue, currentIndex, sourceArray.

Nếu một initialValue là được cung cấp, thì accumulator sẽ bằng với initialValue và currentValue sẽ bằng với phần tử đầu tiên trong mảng.

Nếu initialValue không được cung cấp, thì accumulator sẽ bằng với phần tử đầu tiên của mảng và currentValue sẽ bằng với phần tử thứ hai của mảng.



react:
overview:
- component: chia nhỏ UI, chức năng -> để dễ quản lý, tái sử dụng ( chia càng nhỏ càng dễ reuse)
- props: thuộc thính truyền từ component cha sang con ( props truyền đc )
- state: giống prop ( nhưng state là của riêng component đó ) ( state ko truyền đc)

***class: ko hiểu this -> viết toàn bộ hàm = arrow function là ok ( doc react ).

doc: State is similar to props, but it is private and fully controlled by the component.



Tên Component bắt đầu với Chữ In Hoa - Welcome ( nếu chữ thường welcome -> react hiểu là DOM tags)
khuyến kích tách component để dễ quản lý và reuse

Whether you declare a component as a function or a class, it must never modify its own props.
ko bao giờ chỉnh sửa prop của component???
React is pretty flexible but it has a single strict rule:

TODO:***(lấy từ doc react) : All React components must act like pure functions with respect to their props.
Tất cả các component của react phải hoạt động như "pure" function

Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.
pure function: ko thay đổi đầu vào - và luôn trả cùng 1 kết quả khi cho vào cùng đầu vào

TODO: handling event:
- js: lowercase, "tenHam()" -> onclick="nameFunction()"
- return false -> để ngăn link thực hiện ( tìm hiểu đoạn này, để ngăn link khác ngăn sự kiện...)
  <a href="https://mp3.zing.vn/" onclick="console.log('The link was clicked.'); return false">
        Click me
      </a>

- react: camelCase, {tenHam} ->
    + onClick={nameFunction} ( click mới thực thi )
    + onClick={nameFunction()} ( thực thi lun )
    + onClick={()=> nameFunction(agr)} (có tham số )
-react ko dùng return false -> mà dùng event.preventDefault();
(event là tham số tự có khi dùng onChange, onClick của react - event.target, event.target.name/value)

TODO: xem tiếp .7. Conditional Rendering

TODO: đọc kỹ về
-   component, state, props -> nhớ đúc kết để interview

- cách viết if - for trong JSX  ->

- HOC - Higher order component - Higher order function - callback TODO: doc ky doan nay:
https://viblo.asia/p/callback-function-va-higher-order-function-trong-javascript-QpmlenOr5rd



Detail Component: (khác nhau, múc đích, cách dùng ...)
    - Functional Component
    - React.Component
    - React.PureComponent
chi tiết hơn đọc 2 link dưới -> để interview:
https://techtalk.vn/nhung-loai-component-trong-react-va-cach-su-dung-dung.html
https://github.com/nguyenvanhoang26041994/dev-experiences/blob/master/React/component_vs_purecomponent.md





Props:
    - Props thường nhận từ parent ( nhưng cũng có thể tự tạo prop mặc định defaultProps -> nếu ko truyền vào, thì sẽ dũng deafultProps)
    - Không thay đổi Props sau khi Props đã đc truyền vào component (có thể đổi (setProps - replaceProps) nhưng ko khuyến khích)
    - thường dùng props khi muốn chuyển dữ liệu vào component ( state cũng để chứa dữ liệu ???)

khác nhau:
- state thay đổi, props ko đổi (thay đổi props = cách truyền vào, đã truyền vào là ko đổi nữa)
- State là thành phần của component -> Props đc truyền từ ngoài vào
- (xem hình iphone ngày 10/12)

Khi nào dùng state và khi nào props:
- state: khi thay đổi dữ liệu của chính component đó
- props: dùng để truyền dữ liệu từ cha -> con

chống render ko cần thiết???


JSX:
-  return: bọc trong 1 container lớn nhất <div></div> (div, tr,span) -> ko có thằng nào cùng cấp
- viết js trong {} (<div>{...code js...}</div>)
    + ko dùng if else -> nhưng dùng đc 3 ngôi: condition ? true : false
    +  camelCase syntax
        * onClick, onChange
        * fontSize: "100px"

state và props khác nhau như nào?? khi nào dùng state - khi nào props??
có viết được if hay for -> trong <div>{...}</div> ko?
nói rõ hơn về JSX -> dùng for trong JSX đc ko ?




//lifecycle:
vòng đời : khởi tạo component -> khi state thay đổi -> khi props thay đổi -> unMount component
-TODO:  note chi tiết từng method -> thứ tự chạy, điều kiện để chạy, chạy để làm gì, có những tham số gì???? áp dụng ???

    - WillMount: chạy trước khi render -> làm việc gì trước khi render viết đây
    - DidMount: chạy sau khi render -> cần html chạy xong rồi mới làm -> viết đây
    - WillUpdate: chạy trước render - chạy khi có update state ( thế còn khi props đc nhận thay đổi? - check lại)
    - DidUpdate: chạy sau render - chạy khi có update state ( thế còn khi props đc nhận thay đổi?)
    - WillReceiveProps: nhận props mới -> setState, chống render nếu props k đổi giá trị??? -> chạy trước khi render -> chỉ chạy khi props thay đổi (check xem khi state thay đổi có chạy lại k)
    - shouldComponentUpdate:(trả true or false - mặc định là true) quyết định có update ko -> có 2 tham số: nextProps, nextState
        -> ko khai báo method này hoặc return true -> là sẽ update
        -> return false -> là ko update
    - componentWillUnmount được gọi khi chúng ta unmout 1 component kiểu như xóa nó khỏi react -> tìm hiểu thêm
    - pureComponent? (ko hỉu lắm - từ từ ngâm cứu): test thêm
        -> để ko render lại khi component ko có thay đổi.
        -> Pure chỉ render lại khi props của nó thay đổi.
        -> ko nên lạm dụng PureComponent vì có thể lỗi.
        -> bản chất PureComponent là tự kiểm tra props và state có đổi ko.
*** test kỹ    -> Nhưng so sánh thay đổi của React là so sánh tham chiếu, nếu truyền obj dưới dạng props và thay đổi 1 thuộc tính nào đó thì react k so sánh đc, vì căn bản là cùng 1 obj

thứ tự
constructor -> willMount -> render -> didMount

thứ tự khi có update:
willUpdate -> render -> didUpdate
(constructor, willMount, didMount ko chạy nữa)

set lại State -> là update chạy ( dù là set lại giá trị cũ ) -> đã test
***riêng willReceiveProps -> test kỹ lại -> nếu giá trị props truyền vào ko đổi có chạy lại ko -> tức là chỉ cần có truyền prop là sẽ chạy - hay phải truyền prop giá trị khác mới chạy???

constructor, willMount, didMount: chỉ chạy 1 lần khi mở web -> update lại nó k chạy
willUpdate, didUpdate: mỗi lần update sẽ chạy lại (*** "state" thay đổi hoặc "props nhận" thay đổi -> sẽ chạy lại -> ĐÃ TEST (state hoặc props đổi))
willReceiveProp: chạy khi prop thay đổi (test lại khi giá trị props truyền vào thay đổi hay chỉ cần có truyền prop vào là chạy -> chắc là chỉ cần prop truyền vào lại chạy)
 -> state thay doi, willReceiveProp ko chạy -> đã test

***tổng kết:
- state thay đổi được.
- prop ko thay đổi sau khi đã nhận (có thể thay đổi prop truyền vào -> nghĩa là trước khi nhận )
    + tìm hiểu cái gì chạy khi thay đổi:
        * state thay đổi?
        * props đc nhận thay đổi?

lưu ý với state - doc react:
-  phải dùng setState để thay đổi state
-  setState bất đồng bộ
-  ko tính toán trực tiếp khi setState vd: //wrong: this.setState({ value: value1 + value2}) -> thay thế bằng dùng hàm
    + có thể truyền tham số là hàm trong setState -> this.setState(parameter => {...})

constructor(props) :
    - Hàm này Thực hiện việc thiết lập state cho component.
    - Việc sử dụng super(props) là để có thể sử dụng this.props trong phạm vi hàm constructor này


    thông tin dưới rất hay: note lại -> đọc kỹ
    https://viblo.asia/p/tim-hieu-cac-method-cua-component-trong-react-js-voi-es6-bxjvZYpBkJZ



    HOC - higher order component:





    tìm hiểu Immutability Helpers -
    Nhiều khi ta chỉ muốn copy giá trị của state, nhưng nếu ta truyền this.setState thì nó sẽ làm thay đổi giả trị,
    trong trường hợp này ta cần copy nó. Ta có thể dùng Immutability Helpers.
    Nó sẽ tạo ra một thể hiện của states mình có thể tùy ý sử dụng nó.
    Sau đó nếu muốn setState thì ta vẫn có thể setState bình thường.


   TODO: redux: 3 file: index.js -
    nhúng react:
    install  redux
    install react-redux

    step 1: copy index.js (của react) -> tạo rootReducer và import rootReducer sau
    step 2: tạo folder:
        redux
            - action
            - constant
            - reducers
                + rootReducer.js
                + nameReducer.js ... ( tạo ở step 4 )
    step 3: copy rootReducer.js -> sửa:
                + import nameReducer ( sửa name nếu khác )
                + key nameReducer (sửa name nếu khác)
    step 4: copy nameReducer.js (userReducer, movieRecuder...) -> sửa:
                + const nameReducer ( sửa name nếu khác )
                + export default nameReducer (sửa name nếu khác )

    advanced redux: tạo thêm 2 folder để quản lý biến
        - constant: constants.js
            + export const GET_LIST_MOVIE = "GET_LIST_MOVIE"; (type)
            + tí import qua index.js của action
        - action: index.js
            +   copy nguyên file index.js -> edit cho hợp lý

    TODO: routing:
    - Chủ yếu thao tác trên file App.js
    - routes.js (cùng cấp index.js của react) chứa const []: với item {}-> key - value
        + path
        + exact
        + component
    - component: chứa những component nhỏ - (navbar, item, movie, user ...)
    - pages: chứa những component của trang
        - home
        - admin
        - page-not-found

    component của Route - cấu trúc:

    const showMenuHome = () => {để duyệt mảng - lấy ra từng trang -> đưa vào Switch}

Funtion App - return:
    <BrowserRouter>
    <Navbar />
    <Switch>
        {showMenuHome(routesHome)} // routesHome - import từ file routes.js

        <Route path="/" exact component={Home} />
        <Route path="/page-not-found" exact component={PageNotFound} />
    </Switch>

    </BrowserRouter>




*/


