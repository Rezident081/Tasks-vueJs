<template>
    <div id="app-container" class="container-fluid">
        <div class="row">
            <div class="col-xl-9">
                <Header />
                <Main />
            </div>
            <div class="aside col-xl-3">
                123
            </div>
        </div>
        <modal 
                name="single-task" 
                :adaptive="true">
        </modal>
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

