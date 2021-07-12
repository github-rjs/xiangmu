<template>
	<view class="content">
		<div class="header">
			<div class="head_left">
				<image src="/static/touxiang.png"></image>
				<span>{{username}}</span>
			</div>
			<div class="head_right" v-on:click="IsChallenge = !IsChallenge">
				<image class="head_right_l" src="/static/icon_youjiang.png"></image>
				<image class="head_right_r" src="/static/red.png"></image>
			</div>
		</div>
		<div class="banner">
			<div class="banner_img">
				<image src="/static/banner_01.png"></image>
			</div>
			<div class="banner_to_setting" v-if="IsLogin" v-on:click="IsLogin = !IsLogin">
				<image src="/static/jiemian_10.png"></image>
				<div class="banner_text">
					<p>未绑定手表端应用</p>
					<p>请在下方【设置】中绑定</p>
				</div>
				<div class="banner_logo">
					<image src="/static/watch.png"></image>
				</div>
			</div>
			<div class="banner_info" v-else v-on:click="IsLogin = !IsLogin">
				<image src="/static/jiemian_10.png"></image>
				<div class="banner_info_l">
					<ul>
						<li>家长等级：<b>3</b></li>
						<li>家长积分：<b>26</b></li>
						<li>互动联系：<b>14</b></li>
					</ul>
				</div>
				<div class="banner_info_r">
					<image src="/static/icon_zuanshi.png"></image>
					<p>钻石家长</p>
				</div>
			</div>
		</div>
		<div class="buttons">
			<view @click="toPage('/pages/page/MoreTopics')" open-type="navigate" class="button_link_l">
				<view class="button_more">
					<image src="/static/jiemian_12.png"></image><span>更多题库</span>
				</view>
			</view>
			<view @click="toPage('/pages/page/OralKnowledge')" open-type="navigate" class="button_link_r">
				<view class="button_knowledge">
					<image src="/static/jiemian_13.png"></image><span>口算知识</span>
				</view>
			</view>
		</div>
		<div class="message">
			<image src="/static/jiemian_04.png"></image>
			<div class="message_title">
				<image src="/static/icon_pen.png"></image><span>学习动态</span>
			</div>
			<div class="message_content">
				<ul>
					<li>
						<image src="/static/icon_note.png"></image>
						<div class="message_content_text">
							<b>每日闯关</b>
							<div>
								<i>二胡二胡</i><b>完成了每日闯关，题目全部回答正确</b>
							</div>
						</div>
					</li>
					<li>
						<image src="/static/icon_note.png"></image>
						<div class="message_content_text">
							<b>知识秘境</b>
							<div>
								<i>二胡二胡</i><b>完成了牛顿秘境，共产生<span>五道错题</span></b>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="popUp" v-show="IsChallenge">
			<div class="popUp_box">
				<div class="popUp_box_img">
					<image src="/static/icon_tiaozhan.png"></image>
				</div>
				<div class="popUp_box_title">您的宝贝发起了答题挑战</div>
				<div class="popUp_box_content">
					<image src="/static/jiemian_07.png"></image>
					<span>100以内的加减法</span>
					<b>20题</b>
				</div>
				<div class="popUp_box_button">
					<div class="popUp_box_cancelBtn popUp_btn" v-on:click="IsChallenge = !IsChallenge">拒绝</div>
					<div class="popUp_box_confirmBtn popUp_btn" @click="toPage('../page/InteractionPractice')">接受</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				IsChallenge: false,
				IsLogin: false,
				username: '二胡 二胡'
			}
		},
		onLoad() {

		},
		methods: {
			toPage(url) {
				this.IsChallenge = false;
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.header {
		width: 100%;
		height: 9.5vh;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.head_left {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.head_left image {
		width: 12vw;
		height: 12vw;
		margin-left: 4vw;
		margin-right: 2vw;
	}

	.head_left span {
		font-size: 4vw;
		color: #646c77;
	}

	.head_right {
		margin-left: auto;
		margin-right: 4vw;
		position: relative;
	}

	.head_right .head_right_l {
		width: 8vw;
		height: 6.25vw;
	}

	.head_right .head_right_r {
		width: 2vw;
		height: 2vw;
		position: absolute;
		right: -0.5vw;
		top: -0.5vw;
	}

	.banner {
		width: 100%;
	}

	.banner_img {
		display: flex;
		justify-content: center;
	}

	.banner_img image {
		width: 97.5%;
		height: 29vw;
	}

	.banner_to_setting {
		width: 100%;
		height: 37vw;
		position: relative;
		display: flex;
		justify-content: center;
	}

	.banner_to_setting>image {
		width: 99%;
		height: 37.125vw;
	}

	.banner_to_setting .banner_text {
		position: absolute;
		left: 0;
		top: 30%;
		width: 65%;
		text-align: center;
		color: #fff;
		font-size: 4.5vw;
	}

	.banner_to_setting .banner_logo {
		position: absolute;
		right: 2.3vw;
		bottom: 0.7vh;
	}

	.banner_to_setting .banner_logo image {
		height: 30vw;
		width: 30vw;
	}

	/*  */

	.banner_info {
		width: 100%;
		height: 37vw;
		position: relative;
		display: flex;
		justify-content: center;
	}

	.banner_info>image {
		width: 99%;
		height: auto;
	}

	.banner_info .banner_info_l {
		position: absolute;
		left: 8%;
		top: 15%;
		width: 60%;
		color: #fff;
		font-size: 4.5vw;
	}

	.banner_info .banner_info_l li {
		height: 8vw;
		font-size: 4.5vw;
	}

	.banner_info .banner_info_l li b {
		font-size: 5.5vw;
	}

	.banner_info .banner_info_r {
		position: absolute;
		right: 9%;
		top: 15%;
		width: 22vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		color: #fff;
		font-size: 4.5vw;
	}

	.banner_info .banner_info_r image {
		width: 17vw;
		height: 17vw;
	}

	/**/
	.buttons {
		width: 100%;
		height: 13.6vh;
	}

	.buttons .button_link_l {
		width: 54%;
		height: 100%;
		float: left;
		outline: none;
	}

	.buttons .button_link_r {
		width: 44%;
		height: 100%;
		float: right;
	}

	.buttons .button_more {
		width: 100%;
		height: 100%;
		position: relative;
		float: left;
		margin-left: 1vw;
	}

	.buttons .button_more image {
		width: 100%;
		height: 100%;
	}

	.button_more span {
		position: absolute;
		top: 35%;
		left: 42%;
		color: #fff;
		font-size: 4.5vw;
	}

	.buttons .button_knowledge {
		width: 100%;
		height: 100%;
		position: relative;
		float: right;
		margin-right: 1vw;
	}

	.buttons .button_knowledge image {
		width: 100%;
		height: 96%;
		margin-top: 0.2vh;
	}

	.button_knowledge span {
		position: absolute;
		top: 34%;
		left: 41%;
		color: #fff;
		font-size: 4.5vw;
	}

	.message {
		width: 100%;
		height: 71vw;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		position: relative;
	}

	.message>image {
		width: 98%;
		height: 100%;
	}

	.message .message_title {
		position: absolute;
		top: 0;
		top: 2%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 4.5vw;
		color: #fff;
	}

	.message .message_title image {
		height: 2.5vh;
		width: 2.5vh;
		margin-right: 1vw;
		transform: translateY(0.3vh);
	}

	.message .message_content {
		position: absolute;
		top: 15%;
		left: 5%;
		width: 90%;
		height: 79%;
		overflow-y: auto;
	}

	.message_content ul {
		width: 100%;
	}

	.message_content li {
		width: 100%;
		height: 6.5vh;
		border-bottom: 1px solid #dfdfdf;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.message .message_content li>image {
		width: 8vw;
		height: 8vw;
		margin-right: 2vw;
	}

	.message_content_text {
		font-size: 3.5vw;
		color: #646c77;
	}

	.message_content_text i {
		font-style: normal;
		margin-right: 2vw;
	}

	.message_content_text b {
		font-weight: normal;
	}

	.message_content_text span {
		color: #eb5463;
	}

	.popUp {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
		background-color: rgba(0, 0, 0, 0.1);
	}

	.popUp_box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80vw;
		height: 80vw;
		background-color: #FFFFFF;
		border-radius: 4vw;
		box-shadow: 0px 2px 10px #909090;
	}

	.popUp_box_img {
		position: absolute;
		top: 0%;
		left: 50%;
		transform: translate(-50%, -40%);
		border: 1.5vw solid #ffffff;
		border-radius: 25vw;
	}

	.popUp_box_img image {
		width: 25vw;
		height: 25vw;
	}

	.popUp_box_title {
		position: absolute;
		left: 0%;
		top: 25%;
		width: 100%;
		text-align: center;
		font-size: 4.5vw;
		color: #206487;
	}

	.popUp_box_content {
		position: absolute;
		left: 0%;
		top: 37%;
		width: 100%;
		text-align: center;
	}

	.popUp_box_content image {
		width: 70%;
		height: 16vw;
	}

	.popUp_box_content span,
	.popUp_box_content b {
		position: absolute;
		left: 50%;
		top: 12%;
		transform: translateX(-50%);
		color: #ffffff;
		font-weight: normal;
	}

	.popUp_box_content b {
		top: 46%;
	}

	.popUp_box_button {
		position: absolute;
		left: 0%;
		bottom: 10%;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.popUp_btn {
		width: 30vw;
		height: 12vw;
		line-height: 12vw;
		text-align: center;
		background-color: #fc8470;
		border-radius: 3vw;
		font-size: 4.5vw;
		color: #fff;
	}

	.popUp_btn.popUp_box_confirmBtn {
		background-color: #9ed36b;
	}
</style>
