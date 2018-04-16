<template>
    <div id="app-container" class="container-fluid">
        <div class="row">
            <div class="col-xl-9">
                <Header />
                <Main />
            </div>
            <div class="aside col-xl-3">
                <Sidebar />
            </div>
        </div>
        <Button />
        <div class="modal-container">
            <FormModal />
            <SingleModal />
        </div>
    </div>
</template>

<script>
import Header from "../app-header/header-component"
import Main from "../app-main/main-component";
import Sidebar from "../app-sidebar/sidebar-component";
import Button from "../app-button/button-add";
import FormModal from "../app-modal/modal-form";
import SingleModal from "../app-modal/modal-single";
export default {
    components:{
        Header,
        Main,
        Sidebar,
        Button,
        FormModal,
        SingleModal
    }

}
</script>

