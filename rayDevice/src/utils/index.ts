export function trans( str){
  console.log('json:::', JSON.parse(JSON.stringify(str), null))
  return JSON.parse(str, null);
}