// 3 cách làm đồng bộ -> nhắc demo
// 1. callback function ( của js thuần ES5)
// 2. promise ( ES6)
// 3. Asyn Await (ES8)

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


js mặc định là bất đồng bộ -> nhiều tình huống bắt buộc phải đồng bộ -> nên phải làm nó động bộ lại
3 cách làm động bộ lại
1. callback function ( của js thuần ES5)
2. promise ( ES6)
3. Asyn Await (ES8)



test lai
//forEach: thao tac truc tiep cac phan tu mang -> ko tra ve
//map: tim kiem phan tu, kiem tra .v.v -> tra ve
/*
Những gì forEach() làm được thì map() cũng có thể làm được và ngược lại.
map() cấp phát bộ nhớ và lưu trữ các giá trị trả về, forEach() thì bỏ qua các giá trị trả về
forEach() cho phép gọi hàm callback để thay đổi mảng hiện tại, thay vào đó map() sẽ trả về một mảng mới.
*/






// git -> có thay đổi là phải add lại ( nếu ko add lại, file sẽ ko có nội dung vừa đổi) check lại
// vd: file ABC vừa đc git add -> sau đó chỉnh sửa, thay đổi nội dung.
// - nếu commit lun -> nó sẽ chuyển qua local repository file AC chưa đc chỉnh sửa ( ko có nội dung vừa đổi)
// - phải add lại -> rồi commit -> thì file ABC qua local mới có đầy đủ nội dung vừa chỉnh

//Để kiểm tra tên remote, bạn có thể gõ lệnh git remote -v.
//Nếu bạn không thích tên origin thì có thể đổi tên nó lại nó bằng tên khác cho dễ quản lý nếu như bạn có nhiều remote trong một dự án với lệnh git remote rename tên_cũ tên_mới

//Nếu bạn không cần dùng tới branch nào nữa thì có thể xóa với lệnh git branch -d tên_branch. Lưu ý là cái branch muốn xóa phải được gộp dữ liệu (merge) về master.



// test lệnh này
// Còn nếu bạn muốn xóa nó luôn thì dùng lệnh git rm -f tên_file và nhớ cẩn thận khi dùng lệnh này.
//Trong Git, bạn có thể đưa một tập tin từ Tracked về Untracked với lệnh rm tên_file. Lệnh rm sẽ giúp bạn đưa tập tin về trạng thái Untracked nhưng không xóa hẳn trong ổ cứng.
//Để xem lịch sử của các lần commit trước đó, bạn sử dụng lệnh git log là sẽ thấy. (Ngoài ra, bạn có thể chèn thêm tham số -p vào để hiển thị chi tiết của mỗi lần commit.)

//TODO: ES6
/*
var: khai báo lại đc, gán lại đc.
let: khai báo 1 lần (ko khai báo lại đc), gán lại đc
const: khai báo 1 lần, ko gán lại đc ( khai báo phải có giá trị )

var: ko tuân thủ block scope -> vẫn gọi lại đc ngoài {} -> ra khỏi {} vẫn còn
let: khai báo let trong {} -> ra khỏi {} biến mất

cơ chế hosting của var? ->  hosting khởi tạo ra biến đầu tiến ở trên

arrow function
let nameFunction = (arg) => {}
// nếu có 1 arg thì ko cần bao bởi đấu ()
// có tên : nameFunction = () =>
// ko tên : () =>


this -> xét obj gọi nó ( nếu tìm ko có, nhảy ra window tìm)

arrow ko vào 1 hàm (vd: )


this chỉ sử dụng trong function, dai dien cho đối tượng gọi function đó

***rest parameter (...thamso) -> các tham số truyền vào sẽ đc thành mảng -> dùng các phương thức mảng đc

hỏi lại reduce?
spread operator -> react dùng nhiều
destructuring -> react dùng nhiều
import - export -> dùng nhiều trong react và angular

tim hiều tham chiếu và tham trị

tham chiếu trong javascript: thay đổi vùng nhớ


tham chiếu sẽ bị dính với array và obj
tham trị sẽ dính với number ...

bên file main - import viết đấu file - export viết cuối file ( phải thêm type="module" trong script của main)

//kien thuc js
write on the board: undefined: ko xac dinh - da khai bao chua dc gan' gia tri
is not define: chua dc khai bao -> test lai
// có thể cho biến (obj.) = hàm ->(gán hàm vào biến) -> xem biến là tên hàm
let x = function () {...} //-> gọi hàm x(); ( nếu bỏ chữ function -> thỉ là arrow function rồi?)
*/

//TODO: ES6 buổi 2 
/*
cài thư viện, làm đúng step: npm init -> npm install <tên thư viện...>
tìm hiểu package management









//TODO: react
react -> single page
html va js viet chung 1 file
index.html chi co 1 div-root -> html se dc DOM ra sau



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
 - co che token ( chuoi ma hoa) khi dung API - bao mat (token - BE làm)
  - lazyload: load 1 -> an xem them load tiep
  - innerHTML: bo het cai cu~ lam lai moi - append: them cai moi' vao

  refactor code -> sau khi làm
  - tim hieu null, undefined


  summary:
  - html chi co 1 div id="root"
    - html chi nhung 1 file man.js ( tat ca js khac don vao main)
    -  folder node_module ->ko up len github -> tao file gitIgnore -> npm install ( tu tao lai thu vien dua theo file package)

 */