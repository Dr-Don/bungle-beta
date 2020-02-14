<template>
    <div class="home">
        <div class="header">

        </div>
        <div class="main">
            <div class="menu">
                <el-checkbox-button :label="false" v-model="isCollapse" id="foldBtn">
                    <i class="el-icon-d-arrow-right" v-if = "isCollapse === true"></i>
                    <i class="el-icon-d-arrow-left" v-if = "isCollapse === false"></i>
                </el-checkbox-button>
                <el-menu default-active="1-4-1" class="function-menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                         background-color="#2c3e50"
                         text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">功能一</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">功能二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">功能三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">功能四</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div :class="isCollapse?'room-close':'room-open'">
                <div class="map">
                    <el-amap class="amap-box" :vid="'amap-vue'" :zoom="13" :center="center"></el-amap>
                </div>
            </div>
            <div class="chart">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                isCollapse: true,
                plugin: [{
                    pName: 'Geolocation'
                }],
                center: [123.43, 41.80]
            }
        },
        methods:{
            handleOpen(key, keyPath) {
                window.console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                window.console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="less" scoped>
    .home {
        position: relative;
        height: 100%;
        width: 100%;
        background-color: #2c3e50;
    }
    .function-menu:not(.el-menu--collapse) {
        width: 150px;
        height: 100%;
    }
    .el-menu {
        height: 94%;
    }
    .header {
        position: relative;
        display: block;
        height: 7%;
        background-color: #272b3e;
    }
    .main {
        position: relative;
        display: block;
        height: 93%;
    }
    .menu {
        position: relative;
        display: inline-block;
        float: left;
        width: 5%;
        height: 94%;
    }
    .room-close {
        position: relative;
        display: inline-block;
        float: left;
        width: 75%;
        height: 100%;
        background-color: rgba(77,117,122,0.46);
        transition: .3s;
    }
    .room-open {
        position: relative;
        display: inline-block;
        float: left;
        margin-left: 78px;
        width: 69.8%;
        height: 100%;
        background-color: rgba(77,117,122,0.46);
        transition: .5s;
    }
    .map {
        position: absolute;
        left: 0;
        background-color: black;
        width: 100%;
        height: 70%;
    }
    .chart {
        position: relative;
        display: inline-block;
        float: left;
        background-color: rgba(77,117,122,0.46);
        width: 20%;
        height: 100%;
    }
</style>