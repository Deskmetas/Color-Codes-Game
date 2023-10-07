import "./App.css"

function RefreshButton() {
  // カウンターの状態を管理


  // ボタンがクリックされたときに更新
  const handleRefresh = () => {
       // reloadメソッドによりページをリロード
       window.location.reload();
  };

  return (
    <div>
      
      <button class = "border_btn01" onClick={handleRefresh}>もう一度プレイ</button>
    </div>
  );
}

export default RefreshButton;
