<template>
	<view>
		<div class="banner" style="display: flex;justify-content: center;padding-top:2vw;">
			<image src="/static/banner_02.png" style="width: 98%;height: 41vw;"></image>
		</div>
		<div class="list">
			<ul>
				<li>
					<span>变减法为加法</span>
					<image src="/static/jiemian_14.png" style="width: 100%;height: 26.6vw;"></image>
				</li>
				<li>
					<span>个位数是8或9的两位数乘一位数</span>
					<image src="/static/jiemian_14.png" style="width: 100%;height: 26.6vw;"></image>
				</li>
				<li>
					<span>多位数与11相乘</span>
					<image src="/static/jiemian_14.png" style="width: 100%;height: 26.6vw;"></image>
				</li>
				<li>
					<span>变减法为加法</span>
					<image src="/static/jiemian_14.png" style="width: 100%;height: 26.6vw;"></image>
				</li>
			</ul>
		</div>
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

	.list span {
		position: absolute;
		top: 10vw;
		left: 6vw;
		font-size: 4.5vw;
		color: #ffffff;
		z-index: 1;
	}
</style>
