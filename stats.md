---
layout: default
title: Angular Stats
filename: stats.md
---
## Stats of 100 Angular repositories with the most stars on GitHub

## Motivation
While Angular is one of the most well-known frontend frameworks, there is very little information available about the projects using it. This page tries to answer interesting questions about the usage of Angular. If you have any further questions, please contact me. My [main page](https://patalas.github.io).

## Subject
The statistics is based on one hundred Angular repositories which have been awarded with the most stars on GitHub. For us a Angular repository is Angular tagged and uses angular-core. At the end you find a [list of all repositories](#list-of-all-repositories) which were evaluated in this study. 

## Dec/2020: Which Angular Core Version is used?
On of the most interesting question was on which major version most of the repositories are.
<canvas id="core"></canvas>
<script>
d3.csv('/assets/stats/versions.csv')
  .then(makeChart);

var greenToRedColors = [
"#ff1144",
"#ff5588",
"#ff3366",
"#ff6666",
"#ff8866",
"#ffBB66",
"#33CCFF",
"#3366FF",
"#6633FF",
"#CC33FF"
];

function makeChart(data) {
    var dataLabels = data.map(function(d) {return d.Version});
    var dataValues = data.map(function(d) {return d.Number});
    var colors = data.map(function(d) { return greenToRedColors[d.Version - 3]});
    var chart = new Chart('core', {
        type: 'doughnut',
        data: {
            labels: dataLabels,
            datasets: [
            {
                data: dataValues,
                backgroundColor: colors
            }
            ]
        },
     options: {
    plugins: {
      labels: [
            {
              textMargin: 8,
              render: function (args) {
                return args.value + '%';
              },
              position: 'outside'
            }, 
            {
            render: function (args) {
                return args.label == 5 ? '' : args.label;
              },
            fontColor: ['white', 'white']
            }
      ]              
    }
    }});
};
</script>
Suprisingly only half of the repositories are on major version 11 or 10. We had suspect a much higher percentage. What was shocking to us was that 11% are still on Version 6 or lower. Version 6 was realeased in May 2018.

## Dec/2020: Migration to ESLint
TSLint is deprecated since 2019. It is highly recommend to migrate to ESLint as soon as possible. We asked ourselves, how many projects already moved to ESLint and how many still stick with TSLint.
<div style="padding: 0 5rem"><canvas id="linter"></canvas></div>
<script>
d3.csv('/assets/stats/linter.csv')
  .then(makeChart);

function makeChart(data) {
    var dataLabels = data.map(function(d) {return d.linter});
    var dataValues = data.map(function(d) {return d.number});
    var chart = new Chart('linter', {
        type: 'doughnut',
        data: {
            labels: dataLabels,
            datasets: [
            {
                data: dataValues,
                backgroundColor: ["#90EE90", "#ff9988","#eeeeee"]
            }
            ]
        },
     	options: {
             rotation: 1 * Math.PI,/** This is where you need to work out where 89% is */
            circumference: 1 * Math.PI,/** put in a much smaller amount  so it does not take up an entire semi circle */

            cutoutPercentage: 70,
    plugins: {
      labels: [
            {textMargin: 9,
              render: function (args) {
                return args.label == "none/others" ? '' : args.value + '%    ';
              },
              position: 'outside'
            }, 
            {
              fontSize: 13,
              fontStyle: 'bold',
            render: function (args) {
                return args.label == "none/others" ? '' : (args.label == "TSLint" ? "TSLint (deprecated)" : args.label);
              }
            }
      ]              
    }
    }});
};
</script>
Only few percent of the projects already migrated to ESLint. It will be interesting to see how this number increase with time. 
## What is coming next?
We have some questions in our backlog. Coming soon.

## List of all repositories
This is the list of all one hundred evaluated repositories for this study. To get this list, we get a list of over 200 Angular tagged repositories with the most stars given in GitHub. After that we removed all repositories, which do not use the @angular-core dependency. This are most likely repositories, which are related to Angular, like for example the Angular project itself, but they do not use Angular. For the remaining we took the first one hundred with the most stars, which are listed below. 
- SortableJS/ngx-sortablejs <https://github.com/SortableJS/ngx-sortablejs>
- ngrx/example-app <https://github.com/ngrx/example-app>
- sweetalert2/ngx-sweetalert2 <https://github.com/sweetalert2/ngx-sweetalert2>
- NathanWalker/angular-seed-advanced <https://github.com/NathanWalker/angular-seed-advanced>
- po-ui/po-angular <https://github.com/po-ui/po-angular>
- aviabird/angularspree <https://github.com/aviabird/angularspree>
- KillerCodeMonkey/ngx-quill <https://github.com/KillerCodeMonkey/ngx-quill>
- SebastianM/angular-google-maps <https://github.com/SebastianM/angular-google-maps>
- DevCloudFE/ng-devui <https://github.com/DevCloudFE/ng-devui>
- akveo/nebular <https://github.com/akveo/nebular>
- microsoft/angular-react <https://github.com/microsoft/angular-react>
- xieziyu/ngx-echarts <https://github.com/xieziyu/ngx-echarts>
- seokju-na/geeks-diary <https://github.com/seokju-na/geeks-diary>
- amazon-archives/aws-cognito-angular-quickstart <https://github.com/amazon-archives/aws-cognito-angular-quickstart>
- swimlane/ngx-charts <https://github.com/swimlane/ngx-charts>
- qdouble/angular-webpack-starter <https://github.com/qdouble/angular-webpack-starter>
- ikismail/Angular-ShoppingCart <https://github.com/ikismail/Angular-ShoppingCart>
- mgechev/angular-seed <https://github.com/mgechev/angular-seed>
- tomastrajan/angular-ngrx-material-starter <https://github.com/tomastrajan/angular-ngrx-material-starter>
- ng-alain/ng-alain <https://github.com/ng-alain/ng-alain>
- alexjlockwood/ShapeShifter <https://github.com/alexjlockwood/ShapeShifter>
- damienbod/angular-auth-oidc-client <https://github.com/damienbod/angular-auth-oidc-client>
- AnthonyNahas/ngx-auth-firebaseui <https://github.com/AnthonyNahas/ngx-auth-firebaseui>
- avatsaev/angular-contacts-app-example <https://github.com/avatsaev/angular-contacts-app-example>
- rangle/augury <https://github.com/rangle/augury>
- angular/flex-layout <https://github.com/angular/flex-layout>
- ngx-formly/ngx-formly <https://github.com/ngx-formly/ngx-formly>
- mdbootstrap/Angular-Bootstrap-with-Material-Design <https://github.com/mdbootstrap/Angular-Bootstrap-with-Material-Design>
- cyrilletuzi/angular-async-local-storage <https://github.com/cyrilletuzi/angular-async-local-storage>
- bitwarden/web <https://github.com/bitwarden/web>
- cipchk/ngx-weui <https://github.com/cipchk/ngx-weui>
- AlexKhymenko/ngx-permissions <https://github.com/AlexKhymenko/ngx-permissions>
- ngneat/content-loader <https://github.com/ngneat/content-loader>
- ngrx/platform <https://github.com/ngrx/platform>
- ngx-translate/core <https://github.com/ngx-translate/core>
- ever-co/ever <https://github.com/ever-co/ever>
- aws-samples/aws-mobile-appsync-chat-starter-angular <https://github.com/aws-samples/aws-mobile-appsync-chat-starter-angular>
- guillotinaweb/ngx-schema-form <https://github.com/guillotinaweb/ngx-schema-form>
- mgechev/ngrev <https://github.com/mgechev/ngrev>
- DanielYKPan/date-time-picker <https://github.com/DanielYKPan/date-time-picker>
- Ricbet/panel-magic <https://github.com/Ricbet/panel-magic>
- udos86/ng-dynamic-forms <https://github.com/udos86/ng-dynamic-forms>
- maxisam/ngx-clipboard <https://github.com/maxisam/ngx-clipboard>
- bitwarden/browser <https://github.com/bitwarden/browser>
- wordpress-clients/hybrid <https://github.com/wordpress-clients/hybrid>
- swimlane/ngx-graph <https://github.com/swimlane/ngx-graph>
- r-park/todo-angular-firebase <https://github.com/r-park/todo-angular-firebase>
- CreativeIT/material-angular-dashboard <https://github.com/CreativeIT/material-angular-dashboard>
- TrilonIO/aspnetcore-angular-universal <https://github.com/TrilonIO/aspnetcore-angular-universal>
- jfcere/ngx-markdown <https://github.com/jfcere/ngx-markdown>
- auth0/angular2-jwt <https://github.com/auth0/angular2-jwt>
- DavideViolante/Angular-Full-Stack <https://github.com/DavideViolante/Angular-Full-Stack>
- stbui/angular-material-app <https://github.com/stbui/angular-material-app>
- housseindjirdeh/angular2-hn <https://github.com/housseindjirdeh/angular2-hn>
- juristr/angular-testing-recipes <https://github.com/juristr/angular-testing-recipes>
- angular/components <https://github.com/angular/components>
- JsDaddy/ngx-mask <https://github.com/JsDaddy/ngx-mask>
- MurhafSousli/ngx-progressbar <https://github.com/MurhafSousli/ngx-progressbar>
- naveedgol/music-web-player <https://github.com/naveedgol/music-web-player>
- swimlane/ngx-datatable <https://github.com/swimlane/ngx-datatable>
- mathisGarberg/angular-folder-structure <https://github.com/mathisGarberg/angular-folder-structure>
- ngneat/transloco <https://github.com/ngneat/transloco>
- IgniteUI/igniteui-angular <https://github.com/IgniteUI/igniteui-angular>
- stefanoslig/angular-ngrx-nx-realworld-example-app <https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app>
- zxing-js/ngx-scanner <https://github.com/zxing-js/ngx-scanner>
- ng-select/ng-select <https://github.com/ng-select/ng-select>
- ng-alain/delon <https://github.com/ng-alain/delon>
- orizens/echoes-player <https://github.com/orizens/echoes-player>
- linnovate/mean <https://github.com/linnovate/mean>
- trimox/angular-mdc-web <https://github.com/trimox/angular-mdc-web>
- bitwarden/desktop <https://github.com/bitwarden/desktop>
- ThorstenHans/ngx-electron <https://github.com/ThorstenHans/ngx-electron>
- mseemann/angular2-mdl <https://github.com/mseemann/angular2-mdl>
- kolkov/angular-editor <https://github.com/kolkov/angular-editor>
- MurhafSousli/ngx-sharebuttons <https://github.com/MurhafSousli/ngx-sharebuttons>
- Teradata/covalent <https://github.com/Teradata/covalent>
- angulartics/angulartics2 <https://github.com/angulartics/angulartics2>
- MurhafSousli/ngx-gallery <https://github.com/MurhafSousli/ngx-gallery>
- mgechev/codelyzer <https://github.com/mgechev/codelyzer>
- Angular-RU/universal-starter <https://github.com/Angular-RU/universal-starter>
- Kyusung4698/PoE-Overlay <https://github.com/Kyusung4698/PoE-Overlay>
- johnpapa/angular-ngrx-data <https://github.com/johnpapa/angular-ngrx-data>
- swimlane/ngx-ui <https://github.com/swimlane/ngx-ui>
- fulls1z3/universal <https://github.com/fulls1z3/universal>
- Ismaestro/angular9-example-app <https://github.com/Ismaestro/angular9-example-app>
- abacritt/angularx-social-login <https://github.com/abacritt/angularx-social-login>
- aitboudad/ngx-loading-bar <https://github.com/aitboudad/ngx-loading-bar>
- angular-split/angular-split <https://github.com/angular-split/angular-split>
- UltimateAngular/ngx-errors <https://github.com/UltimateAngular/ngx-errors>
- jiayihu/ng-animate <https://github.com/jiayihu/ng-animate>
- ng-matero/ng-matero <https://github.com/ng-matero/ng-matero>
- TwanoO67/bootstraping-ngx-admin-lte <https://github.com/TwanoO67/bootstraping-ngx-admin-lte>
- ng-lightning/ng-lightning <https://github.com/ng-lightning/ng-lightning>
- swimlane/ngx-dnd <https://github.com/swimlane/ngx-dnd>
- shlomiassaf/ngx-modialog <https://github.com/shlomiassaf/ngx-modialog>
- angular/angularfire <https://github.com/angular/angularfire>
- cedoor/mindmapp <https://github.com/cedoor/mindmapp>
- xmlking/ngx-starter-kit <https://github.com/xmlking/ngx-starter-kit>
- ngx-rocket/starter-kit <https://github.com/ngx-rocket/starter-kit>
- datorama/akita <https://github.com/datorama/akita>

<!-- 
bundler exec jekyll build
bundler exec jekyll serve
-->