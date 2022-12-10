module.exports = {
  // 화살표 함수의 매개변수 표시 형태
  arrowParens: 'always',

  // 브라켓 한줄 사용 여부
  // 마지막 '>'를 다음줄로 내릴지 여부
  bracketSameLine: false,

  // 객체 선언시 괄호 양 끝 사이의 공백 사용여부
  bracketSpacing: true,

  // 파일 안에 또다른 형식의 코드에도 Prettier를 적용할지 여부
  embeddedLanguageFormatting: 'auto',

  // html의 공백을 처리하는 방법
  htmlWhitespaceSensitivity: 'css',

  // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
  insertPragma: false,

  // jsx에서 홀따옴표 사용여부
  jsxSingleQuote: false,

  // 코드가 보여지는 너비
  printWidth: 80,

  proseWrap: 'preserve',
  // 객체의 속성을 표현할때, 따옴표를 적용하는 조건
  // "as-needed" : 필요한 경우에만 객체에 따옴표
  // "consistent" : 하나라도 따옴표가 필요하다묜 모든속성에 따옴표
  quoteProps: 'as-needed',

  // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정 (v1.8.0)
  requirePragma: false,

  // 세미콜론 사용여부
  semi: true,

  // 큰따옴표 대신 작은 따옴표 사용 여부
  singleQuote: true,

  // 들여쓰기 간격
  tabWidth: 2,

  // 후행 쉼표의 사용조건
  // 배열의 요소와 객체 타입의 속성을 나열하는 경우에, 맨 마지막 요소 뒤에 쉼표를 입력할지를 결정합니다.
  trailingComma: 'es5',

  // 탭을 사용할지 여부
  useTabs: false,
};
