# sideThings

1. pm2 init simple
ecosystem.config.js

2. create dir
    - demo
        - demo_DB
        - demo_back_node
        - demo_back_vue

3. db setting
    - java: h2 database
    - jdk 설치
        - https://hymndev.tistory.com/5
        - 환경변수 설정
    - gradle 설치
        - gradle build
        - start : gradle bootRun
        - jar build : gradle bootJar
            - jar start : java -jar [filename].jar
            - 생성 경로 : build/libs/~~
    - ecosystem에 추가
        - https://javaexpert.tistory.com/957

4. backend로 사용할 node 프로젝트 생성
    - restApi로 생성
    - ecosystem에 추가