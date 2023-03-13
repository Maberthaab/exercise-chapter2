function solution(str) {
        let ganti = str.replace(".", "()");
        return ganti;
      }
      console.log(solution("1.1.1.1"));
      console.log(solution("192.168.1.1"));