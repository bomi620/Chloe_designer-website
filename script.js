/*const mobileWidth = '300px'; // 쪼그라들기 시작할 시점
React.useEffect(() => {
  const onResize = () => {
    const zoom = Math.min(window.innerWidth / mobileWidth, 1);
    document.documentElement.style.zoom = `0.5';
  };
  onResize();
  window.addEventListener('resize', onResize);
  return () => window.removeEventListener('resize', onResize);
}, []);*/


/*document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 동작(링크 이동) 막기
        const targetId = this.getAttribute('href'); // 클릭된 메뉴 항목의 href 속성 값 가져오기
        const targetSection = document.querySelector(targetId); // 앵커의 href 값과 일치하는 섹션 요소 가져오기
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // 해당 섹션으로 스르륵 이동
        }
    });
});*/



// 이미지들을 가져와서 처리
/*document.querySelectorAll('.picture .image-container img').forEach(function(img) {
    img.addEventListener('load', function() {
        var containerWidth = this.parentElement.offsetWidth;
        var containerHeight = this.parentElement.offsetHeight;
        var containerAspectRatio = containerWidth / containerHeight;

        var imageAspectRatio = this.naturalWidth / this.naturalHeight;

        if (imageAspectRatio > containerAspectRatio) {
            // 이미지가 컨테이너보다 더 넓을 경우
            var newWidth = containerHeight * imageAspectRatio;
            var cropValue = (newWidth - containerWidth) / 2;
            this.style.width = newWidth + 'px';
            this.style.height = containerHeight + 'px';
            this.style.marginLeft = -cropValue + 'px';
            this.style.marginTop = '0px'; // 이미지를 수직 가운데 정렬하기 위해 marginTop을 추가합니다.
        } else {
            // 이미지가 컨테이너보다 더 길 경우
            var newHeight = containerWidth / imageAspectRatio;
            var cropValue = (newHeight - containerHeight) / 2;
            this.style.width = containerWidth + 'px';
            this.style.height = newHeight + 'px';
            this.style.marginTop = -cropValue + 'px';
            this.style.marginLeft = '0px'; // 이미지를 수평 가운데 정렬하기 위해 marginLeft을 추가합니다.
        }
    });
});
*/