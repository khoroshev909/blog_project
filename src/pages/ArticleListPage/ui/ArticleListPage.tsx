import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView, ArticleList } from 'enteties/Article';

interface ArticleListPageProps {
    className?: string
}

const articles = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://yandex-images.clstorage.net/Z5cw2T155/56a948N4NS/AdsgAC9Smw-gbRJHJkuEi3_7rOsLrZp4XhKoKURukcKzRa_osEdBdFWq4rzBFHN5p_kq0_40zC_2D8HWoC7JBBKCZ0xlFYxV9i8EEy5IgYlipu_6F_eeJURQ9CVWYcecu0e7velRQ3RJ6ey--yhUD9fEUraOS-RT6VuY1v1ggkEC5QtBPnXvFYBMdlEvdI6vVL2OxSnppzN5E80pQSPr2cMj0b_eeTdpRv6a__UPeznB9Vi2jm_ud9RJnvTIefxnFdQ_JihDwBiIS1NmEX-Ro0mfr-Mo-LQpeSTQPnIQzPX_IPeb53IZZ0f6sMbRG1QpxOJxqqp49V_TX539_1blai75AAUwVfQykk1JaiByiK13oJL9GPqLBUAZ4y1zK__i-DDIt_Z2Hlp84bvh8AFvG-D9XoKSWP5k_W651-FR31AU7Q0YH3HxEZB8akY-S6ahRpyN1DvOtyFfEewfRy7Tw9IA7ZDqaz9bd_Sw5e82VBjd4kSMrnnXZMRfvcfxe95aP-seERVR8jKuaEZnK2mNnH-PoM8F7r0sRgPaHG47_9DIG--Z82gLUn_Ng-H0Dmcg4-tpnqJG4m3zX7rzwX7EfDvxFQcrY8YrrkdSTTR_qIJJo6neMuO1EFsx8xtsPt_Z6zH5kMFGEXRZ_4L-0wZ4J_LMXKC9b8ZK20-Y1tN-y2o-_gAPE3bENpJOeFcJVamBaKaHyyfEnC1iPsYwXCzG7_My5YjFVTljYdyQzvEbYADU0FKxkH_XUNlPp8b6ec5cM-A8DDZR1CiTR0loCXCsp0-EjMUY5aQFfBHtLFwD2Pb4A8eL0Wc-cnTjt-3xPG851NZNoZ11znbXe5_Y-X_-cDL5EDs4cuYEq25qUBdwuZljkKjAFNOpFk083hpVKM3V_h3ttOhmMENFy5ja1SJ-Hv_Ydqy2Rv9H1kO75dZc9lQk6yYSF2TfJa1MUkQfUo-LVY-VwCrBogJ8IdY-SA8',
        },
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        type: [
            'IT', 'ECONOMICS', 'SCIENCE',
        ],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: '4',
                type: 'CODE',
                code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
            },
            {
                id: '5',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: '2',
                type: 'IMAGE',
                src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                title: 'Рисунок 1 - скриншот сайта',
            },
            {
                id: '3',
                type: 'CODE',
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
            },
            {
                id: '7',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: '8',
                type: 'IMAGE',
                src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                title: 'Рисунок 1 - скриншот сайта',
            },
            {
                id: '9',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                ],
            },
        ],
    },
] as Article[];

const ArticleListPage = ({ className }: ArticleListPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('articleList')}
            <ArticleList
                articles={articles}
                loading
                view={ArticleView.BIG}
            />
        </div>
    );
};

export default ArticleListPage;
