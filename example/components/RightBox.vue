<template>
    <div class="right">
        <div class="right__crop">
            <div class="right__crop__title">CROP IMAGE: </div>
            <div class="right__crop__img js-cropResult"></div>
            <span class="Button js-cropImage">Crop Image</span>
        </div>
        <div class="right__filter">
            <div class="right__filter__title">FILTER IMAGE: </div>
            <div class="right__filter__list">
                <div class="right__filter__img">
                    <div class="right__filter__btn js-filter" data-type="blur">Blur</div>
                </div>
                <div class="right__filter__img">
                    <div class="right__filter__btn js-filter" data-type="flip">Flip</div>
                </div>
                <div class="right__filter__img">
                    <div class="right__filter__btn js-filter" data-type="gray">Gray</div>
                </div>
                <div class="right__filter__img">
                    <div class="right__filter__btn js-filter" data-type="mosaic">Mosaic</div>
                </div>
                <!-- <div class="right__filter__img">
                    <div class="right__filter__btn js-filter" data-type="oil">Oil</div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RightBox'
}
</script>

<style lang="scss" scoped>
.right{
    display: inline-block;
    width: 50%;
    text-align: center;
    vertical-align: top;
    &__crop{
        text-align: left;
        &__title{
            font-size: 26px;
            color: #8566aa;
            margin-bottom: 20px;
        }
        &__img {
            vertical-align: middle;
            display: inline-block;
            width: 200px;
            height: 200px;
            margin-right: 30px;
            border: 2px solid #8566aa;
            border-radius: 5px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url('http://mtapplet.meitudata.com/596c72073971d86b5128.jpg');
        }
    }

    &__filter{
        text-align: left;
        width: 80%;
        &__title{
            font-size: 26px;
            color: #8566aa;
            margin-bottom: 20px;
            margin-top: 40px;
        }
        &__list{
            white-space: nowrap;
            overflow-x: scroll;
        }
        &__btn{
            display: inline-block;
            font-size: 20px;
            line-height: 40px;
            color: #8566aa;
            text-align: center;
            padding: 0 20px;
            border-radius: 5px;
            border: 2px solid #8566aa;
            margin-top: 10px;
            cursor: pointer;
            &:hover {
                color: white;
                background-color: #8566aa;
            }
        }
        &__img{
            text-align: center;
            display: inline-block;
            width: 250px;
            height: 360px;
            border: 2px solid #8566aa;
            border-radius: 5px;
            background-size: 90% auto;
            background-position: center bottom;
            background-repeat: no-repeat;
            background-image: url('http://mtapplet.meitudata.com/596c72073971d86b5128.jpg');
            margin: 0 20px 0 0;
        }
        
    }
}
</style>