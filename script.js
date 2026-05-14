// 地區資訊數據
const countryData = {
    "中國": {
        geography: "中國位於亞洲東部，面積約960萬平方公里，是世界上面積最大的國家之一。地形多樣，包括高原、山脈、平原和沙漠。",
        history: "中國有五千多年的文明史，從夏朝開始經歷多個朝代。20世紀初經歷革命，1949年成立中華人民共和國。",
        society: "中國是世界上人口最多的國家，約14億人口。經濟快速發展，成為全球第二大經濟體。社會結構正從農業向城市化轉變。",
        future: "預計中國將繼續經濟增長，科技創新領先，可能在可再生能源和人工智能領域取得重大進展，但面臨人口老齡化和環境挑戰。"
    },
    "美國": {
        geography: "美國位於北美洲，面積約983萬平方公里，包括50個州。地形從東部平原到西部山脈多樣化。",
        history: "美國於1776年獨立，經歷內戰和兩次世界大戰。20世紀成為全球超級大國。",
        society: "美國是多元文化社會，人口約3.3億。經濟發達，創新科技領先，但存在貧富差距和社會分化問題。",
        future: "美國可能繼續在科技和軍事領域領先，但需應對氣候變化和國內政治分歧。預計將加強與亞洲國家的合作。"
    },
    "日本": {
        geography: "日本位於亞洲東部，由四個主要島嶼組成，面積約37.8萬平方公里。地形以山地為主，地震頻發。",
        history: "日本從封建時代發展到明治維新，成為現代國家。二戰後經濟快速崛起。",
        society: "日本人口約1.26億，老齡化嚴重。科技先進，文化影響力大，但面臨人口減少和經濟停滯問題。",
        future: "日本可能通過移民和科技創新應對人口挑戰，預計在機器人和可持續能源領域取得進展。"
    },
    "台灣": {
        geography: "台灣位於西太平洋，面積約3.6萬平方公里。地形以山地為主，氣候溫暖。",
        history: "台灣曾為荷蘭和清朝統治，1895年成為日本殖民地。1945年光復，1949年國民政府遷台。",
        society: "台灣人口約2360萬，民主制度發達。經濟以科技製造為主，文化多元。",
        future: "台灣可能繼續科技創新，但面臨地緣政治緊張。預計將加強國際合作和可持續發展。"
    },
    "英國": {
        geography: "英國位於歐洲西北部，由大不列顛島和愛爾蘭島北部組成，面積約24.3萬平方公里。氣候溫和。",
        history: "英國是工業革命發源地，曾建立大英帝國。二戰後逐漸退出殖民地。",
        society: "英國人口約6700萬，多元文化。脫歐後經濟調整中，教育和醫療系統發達。",
        future: "英國可能通過創新經濟重振，但需應對脫歐後的貿易挑戰。預計將加強與歐盟以外國家的合作。"
    }
};

// 獲取元素
const searchBtn = document.getElementById('search-btn');
const countryInput = document.getElementById('country-input');
const resultDiv = document.getElementById('result');
const countryName = document.getElementById('country-name');
const geography = document.getElementById('geography');
const history = document.getElementById('history');
const society = document.getElementById('society');
const future = document.getElementById('future');

// 事件監聽
searchBtn.addEventListener('click', function() {
    const country = countryInput.value.trim();
    if (country === '') {
        alert('請輸入國家或地區名稱');
        return;
    }

    const data = countryData[country];
    if (data) {
        countryName.textContent = country;
        geography.textContent = data.geography;
        history.textContent = data.history;
        society.textContent = data.society;
        future.textContent = data.future;
        resultDiv.classList.remove('hidden');
    } else {
        alert('抱歉，目前沒有此地區的資訊。請嘗試其他國家或地區。');
        resultDiv.classList.add('hidden');
    }
});

// 按Enter鍵也能查詢
countryInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});