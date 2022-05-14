const validateEmail = (email: string) => {
  const verifyEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return verifyEmail.test(String(email).toLowerCase())
}

export const validUser = (
  email: string,
  password?: string,
  name?: string,
  passwordConfirm?: string
) => {
  if (!name || !email || !password || !passwordConfirm)
    return 'Preencha todos os campos'

  if (!validateEmail(email)) return 'Email inválido'

  if (password.length < 6) return 'A senha deve ter no mínimo 6 caracteres'

  if (password !== passwordConfirm) return 'As senhas não conferem'
}

export const validEquipament = (
  ns: string,
  type: string,
  brand: string,
  model: string,
  status: string
) => {
  if (!ns || !type || !brand || !model || !status)
    return 'Preencha todos os campos'

  if (ns.length < 3) return 'O número de série deve ter no mínimo 3 caracteres'
}
