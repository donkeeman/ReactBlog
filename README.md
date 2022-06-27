# ReactBlog
>HTML/CSS로 작성되었던 블로그 페이지를 React로 변경하는 과제입니다.

링크: https://donkeeman.github.io/ReactBlog/
## 어려웠던 부분
- 상대 경로로 이미지를 지정해서 deploy 후의 페이지에서는 이미지가 제대로 뜨지 않았음
  - ```process.env.PUBLIC_URL``` 을 이용한 절대 경로로 수정
- 로컬에서는 라우터가 제대로 작동했으나, deploy 후의 페이지에서는 동작하지 않았음
  - React v18과 react-router-dom v5.2.0의 호환성 버그 ([Issue](https://github.com/remix-run/react-router/issues/7870)) ([PR](https://github.com/remix-run/react-router/pull/8831)) -> react-router-dom 버전 업데이트하여 해결
  - BrowserRouter의 basename에 ```process.env.PUBLIC_URL```을 지정
## 개선 사항
- 내부 데이터를 사용하지 않고, fetch를 이용하여 외부 데이터를 비동기적으로 받아오도록 수정하기
