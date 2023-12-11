// 随机获取若干个经纬度
export function generateRandomPoints(
  latitude,
  longitude,
  radiusInMeters = 1000,
  numberOfPoints = 1
) {
  const points = []

  for (let i = 0; i < numberOfPoints; i++) {
    points.push(generateRandomPoint(latitude, longitude, radiusInMeters))
  }

  return points
}

// 随机获取经纬度
export function generateRandomPoint(latitude, longitude, radiusInMeters = 1000) {
  // Convert latitude and longitude from degrees to radians
  const lat = toRadians(latitude)
  const lon = toRadians(longitude)

  // Earth's radius in meters
  const earthRadius = 6371000

  // Generate a random angle (in radians) and distance (in meters)
  const angle = Math.random() * 2 * Math.PI
  const distance = Math.random() * radiusInMeters

  // Calculate the new latitude and longitude based on the random angle and distance
  const newLat = Math.asin(
    Math.sin(lat) * Math.cos(distance / earthRadius) +
      Math.cos(lat) * Math.sin(distance / earthRadius) * Math.cos(angle)
  )
  const newLon =
    lon +
    Math.atan2(
      Math.sin(angle) * Math.sin(distance / earthRadius) * Math.cos(lat),
      Math.cos(distance / earthRadius) - Math.sin(lat) * Math.sin(newLat)
    )

  // Convert the new latitude and longitude from radians to degrees
  const newLatitude = toDegrees(newLat)
  const newLongitude = toDegrees(newLon)

  return { latitude: newLatitude, longitude: newLongitude }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180)
}

function toDegrees(radians) {
  return radians * (180 / Math.PI)
}

// 随机获取颜色
export function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
