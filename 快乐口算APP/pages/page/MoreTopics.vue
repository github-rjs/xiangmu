<template>
	<view>
		<div class="banner" style="display: flex;justify-content: center;padding-top:2vw;">
			<image src="/static/banner_02.png" style="width: 98%;height: 41vw;"></image>
		</div>
		<div class="list">
			<ul>
				<li>
					<h3>牛顿的秘境 第一章</h3>
					<image src="/static/jiemian_11.png" style="width: 100%;height: 37.3vw;"></image>
					<div class="list_msg">
						<ul>
							<li>类型：200以内的进位加法</li>
							<li>年级：二年级</li>
							<li>数量：600题</li>
						</ul>
					</div>
					<text class="list_price">￥2</text>
				</li>
				<li>
					<h3>牛顿的秘境 第二章</h3>
					<image src="/static/jiemian_09.png" style="width: 100%;height: 37.3vw;"></image>
					<div class="list_msg">
						<ul>
							<li>类型：200以内的进位加法</li>
							<li>年级：二年级</li>
							<li>数量：600题</li>
						</ul>
					</div>
					<text class="list_price">￥2</text>
				</li>
				<li>
					<h3>牛顿的秘境 第三章</h3>
					<image src="/static/jiemian_10.png" style="width: 100%;height: 37.3vw;"></image>
					<div class="list_msg">
						<ul>
							<li>类型：200以内的进位加法</li>
							<li>年级：二年级</li>
							<li>数量：600题</li>
						</ul>
					</div>
					<text class="list_price">￥2</text>
				</li>
			</ul>
		</div>
		<text class="bottom_text">需要在《 快乐口算 》手表端购买解锁</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.list li {
		position: relative;
	}

	.list h3 {
		position: absolute;
		top: 4vw;
		left: 6vw;
		font-size: 5vw;
		font-weight: normal;
		color: #ffffff;
		z-index: 1;
	}

	.list_msg {
		position: absolute;
		top: 12vw;
		left: 6vw;
		font-size: 4.5vw;
		color: #ffffff;
	}

	.list_price {
		position: absolute;
		top: 45%;
		right: 6vw;
		transform: translateY(-50%);
		font-size: 10vw;
		color: #ffffff;
	}

	.bottom_text {
		width: 100%;
		position: fixed;
		bottom: 1.5vh;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		font-size: 3.5vw;
		color: #646c77;
	}
</style>
