new Vue({
    el: "#app",
    data: {
        leftValue: '0',
        rightValue: '',
        operator: ''
    },
    computed:{
        operacion: function() {
          return !!this.operator ? this.leftValue + this.operator + this.rightValue : this.leftValue;
        }
    },
    methods: {
        restart: function() {
            this.leftValue= '0',
            this.rightValue= '',
            this.operator= ''
        },
        append: function(value) {
            if (!!this.operator){
                this.rightValue = String(parseInt(this.rightValue + value))
            } else {
                this.leftValue = String(parseInt(this.leftValue + value))
            }
        },
        result: function() {
            switch (this.operator) {
                case '+':
                    this.leftValue = String(parseInt(this.leftValue) + parseInt(this.rightValue))
                    this.rightValue = ''
                    this.operator=''
                    break;
                case '-':
                    this.leftValue = String(parseInt(this.leftValue) - parseInt(this.rightValue))
                    this.rightValue = ''
                    this.operator=''
                    break;
                case '*':
                    this.leftValue = String(parseInt(this.leftValue) * parseInt(this.rightValue))
                    this.rightValue = ''
                    this.operator=''
                    break;
                case '/':
                    this.leftValue = String(parseInt(this.leftValue) / parseInt(this.rightValue))
                    this.rightValue = ''
                    this.operator=''
                    break;
                default:
                    break;
            }
        }
    }
  });