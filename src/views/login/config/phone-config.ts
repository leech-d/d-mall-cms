export const rules = {
  number: [
    {
      required: true,
      message: '手机号必须填写~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号必须是11位数字~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码必须填写~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '验证码必须是6位数字~',
      trigger: 'blur'
    }
  ]
}
