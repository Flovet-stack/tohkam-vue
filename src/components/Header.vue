<template>
    <div>
        <header class="desktop-header">
            <div class="con">
                <div class="logo">
                    <img src="@/assets/images/logos/darklogo.png" alt="">
                    <span>Tohkam</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Reports</a></li>
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <div class="nav-btns">
                        <a href="" class="btn btn-secondary"><span>Login</span></a>
                        <a href="" class="btn btn-primary"><span>Register</span></a>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';
@import '../assets/styles/_utils.scss';

header.desktop-header {
    width: 100%;
    height: 70px;
    // background-color: red;
        display: flex;
        align-items: center;
    .con {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            display: flex;
            align-items: center;
            img {
                height: 35px;
                margin-right: .3em;
            }
        }
        nav {
            display: flex;
            display: flex;
            align-items: center;
            ul {
                display: flex;
                margin-right: 1em;
                li {
                    a {
                        text-decoration: none;
                        font-size: 1.1em;
                        margin: 0 .5em;
                        color: $text;
                        &:hover {
                            color: $primary-color  ;
                        }
                    }
                }
            }
            .nav-btns {
                display: flex;
                .btn:first-child {
                    margin-right: 1em;
                }
            }
        }
    }

}
</style>