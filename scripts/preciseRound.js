function precise_round(num, decimals) {
		var t=Math.pow(10, decimals);
		return (Math.round((num * t) + (decimals>0?1:0)*(Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
}
