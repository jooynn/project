document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.btn_open').addEventListener('click', function(e){
    // 더보기 프레임 클래스 정보 얻기
    let classList = document.querySelector('.book_intro').classList;
    // 컨텐츠 높이 얻기
    let contentHeight = document.querySelector('.book_intro > .book_intro_detail').offsetHeight;

    if (classList.contains('showstep')) {
      classList.remove('showstep');
      if (contentHeight > 400) {
        document.querySelector('.btn_open').classList.add('hide');
      }
    }

    // 전체 보기 시 더보기 버튼 감추기 + 감추기 버튼 표시
    if (!classList.contains('showstep')) {
      e.target.classList.add('hide');
      document.querySelector('.btn_close').classList.remove('hide');
    }
  });
});

// 감추기 버튼 이벤트 리스너
document.querySelector('.btn_close').addEventListener('click', function(e) {
  e.target.classList.add('hide');
  document.querySelector('.btn_open').classList.remove('hide');
  document.querySelector('.book_intro_detail').classList.add('showstep');
})