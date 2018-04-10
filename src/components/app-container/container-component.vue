<template>
    <div id="app-container">
        <div class="row">
            <div class="col-lg-9">
                <Header />
                <Main />
            </div>
            <div class="aside col-lg-3">
                123
            </div>
        </div>

    </div>
</template>

<script>
import Header from "../app-header/header-component"
import Main from "../app-main/main-component";
export default {
    components:{
        Header,
        Main
    }

}
</script>

