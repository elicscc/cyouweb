import Cookies from 'js-cookie'
const TokenKey = 'User-Token'
const NameKey = 'User-Name'
const AvatarKey = 'User-Avatar'

export function getUser() {

  let token = Cookies.get(TokenKey)


  let name = Cookies.get(NameKey)

  let avatar = Cookies.get(AvatarKey)

  let user = { name, avatar, token }
  return user
}

export function setUser(token, name, avatar) {
  Cookies.set(NameKey, name)
  Cookies.set(AvatarKey, avatar)
  Cookies.set(TokenKey, token)
}

export function removeUser() {
  Cookies.remove(TokenKey)
  Cookies.remove(NameKey)
  Cookies.remove(AvatarKey)
}
