const PalindromeValidation = () => {
  function isPalindrome(string) {
    const formatRegex = /[^a-zA-Z0-9]/g;

    const formattedStr = string.replace(formatRegex, "").toLowerCase();
    const reversedStr = formattedStr.split("").reverse().join("");

    if (formattedStr === reversedStr) {
      return true;
    }
    return false;
  }

  console.log(isPalindrome('А роза упала на лапу Азора'));
  console.log(isPalindrome('racecar'));
  return <></>;
};

export default PalindromeValidation;

