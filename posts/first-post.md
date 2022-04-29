<style>

     header h3 {
        color: #fff;
    }



    body {
        display: flex;
        margin: auto;
        padding: 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial;
        /*     color: #fff; */
        flex-direction: column;
    }

    .container {
        margin: 20px;
    }

    .nav-bar {
        width: 100%;
        position: sticky;
        /*     background-color: orange; */
        background: orange linear-gradient(orange, #ff8c00);
        box-shadow: rgb(0 0 0 / 12%) 0 1px 8px;
        display: flex;
        justify-content: space-between;
    }

    .logo {
        height: 30px;
        width: 46px;
        background-repeat: no-repeat;
        background-size: 47px;
        background-image: url('https://cdn2.vectorstock.com/i/thumb-large/03/61/comfortable-yellow-couch-with-red-pillows-rgb-vector-33850361.jpg');
        margin: 20px;
    }

    .user-container {
        margin: 20px;
    }

    li {
        list-style: none;
    }

    nav {
        background-color: khaki;
        width: 1350px;
    }

    nav li {
        position: relative;
        float: right;
        padding: 0px 30px 0px 30px;
        text-transform: capitalize;
    }

    p {
        font-size: 14px;
        font-family: Helvetica;
        color: #000;
        line-height: 2em;
        margin-left: 20px;
        text-align: justify;
    }

    .paragraph-container {
        margin: auto;
        width: 640px;
    }

    .paragraph-banner {
        color: #000;
        /*   text-align: center; */
        position: relative;
        left: 18px;
    }

    .library-display {
        margin-top: 50px;
    }

    .library-items {
        display: inline-block;
        font-size: 250%;
        font-family: sans-serif;
        font-weight: regular;
        /*   display: flex; */
        /*   justify-content: space-between; */
        padding-left: 60px;
        margin: 0px 10px 10px 10px
    }

    .side-bar {

        display: inline-block;
        border: solid 1px black;
        width: 240px;
        text-align: center;
        padding-right: 20px;
        margin: 20px;
    }

    .side-bar-item {
        color: #000;
        background: rgb(90, 214, 90);
    }

    /* https://stackoverflow.com/questions/12086453/wrap-anchor-tag-around-li-element#:~:text=The%20only%20legal%20element%20allowed,around%20other%20block%20level%20elements.&text=And%20your%20anchor%20shall%20fill,space%20of%20the%20. */
    a {
        text-decoration: none;
        display: block;
        width: 100%;
        height: 20%;
    }


    * {
        box-sizing: border-box;
    }

    /* Create two unequal columns that floats next to each other */
    .column {
        float: left;
        padding: 10px;
        height: 300px;
        /* Should be removed. Only for demonstration */
    }

    .left {
        width: 25%;
    }

    .right {
        width: 75%;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
</style>

<h2 style="visibility: hidden;">ipsum lorem</h2>

    <div class="row">
        <div class="column left" style="background-color: #aaa">
            <h2 style="text-align: center;">Posts</h2>

            <ul class="posts-container">
                <li><a href="blog-post">blog post</a></li>
            </ul>


        </div>
        <div class="column right" style="background-color: #bbb">
            <div class='paragraph-container'>
                <h3 class='paragraph-banner'>Getting Started</h3>
                <p>My website is so <strike>ugly</strike> awesome!, but you've got to start somewhere. So I wanted to
                    create I
                    guesse like a blog, about all the different tools avaialble with timelines with prices.</p>

                <p>If you want to be a developer, you'll want to learn HTML, CSS, and JavaScript. Which are really the
                    very
                    basics,
                    how much of each should you learn? It doesn't take much to put together a basic static website.</p>
            </div>


            <div class='paragraph-container'>
                <h3 class='paragraph-banner'>Leveling Up</h3>

                <p>Once you have a grasp of the basics you can move onto frameworks and libraries. Just like with game
                    consoles
                    there's a big three to pick from. However you are far from limited to just these.</p>

                <ul class="library-display">
                    <li class="library-items">React</li>
                    <li class="library-items">Angular</li>
                    <li class="library-items">Vue</li>



                    <p>You can work with a framework or view library, but you'll want to get an understanding of
                        ECMAScript2015
                        and
                        beyond. There are many place you can learn about es6 which will be helpful when reading modern
                        documentation
                        and
                        tutorials on JavaScript.</p>
            </div>

            <div class='paragraph-container'>
                <h3 class='paragraph-banner'>Web Design</h3>

                <p>Is hailed as one of the most difficult skills to learn, especially for the more terminal oriented
                    community.
                    Anyway I'm telling you its posible not that I can do it. I'm still learning like most.</p>
                <p>Once you get a nice web deisgn down there's the interactions, responding to user input. When a
                    website or
                    piece
                    of software is designed well its almost unoticable, because it meets your expectations.</p>
            </div>

            <div class='paragraph-container'>
                <h3 class='paragraph-banner'>Getting Technical</h3>

                <p>There's so much that goes into programming. Building modern websites, luckily there have been major
                    inovation
                    in online learning. There are many options to learn how to code.</p>
            </div>

            <div class='paragraph-container'>
                <h3 class='paragraph-banner'>Template Element</h3>

                <p>lorem ipsum dolor sit amet</p>
            </div>




            <div class="container">
                <h5 id="reviews"></h5>
            </div>
        </div>
    </div>
