
		export Array.prototype.indexOf = val=> {
						for (var i = 0; i < this.length; i++) {
						if (this[i].id == val) return i;
						}
						return -1;
					};
        export  Array.prototype.remove =val =>{
						var index = this.indexOf(val);
						if (index > -1) {
						this.splice(index, 1);
						}
		};
