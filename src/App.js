{
  return <div key={sub.id} className="grid-container">
    <span className="grid-item">{sub.name}</span>
    <span className="grid-item">{sub.phone}</span>
    <span className="grid-item action-btn-container">
      <button className="custom-btn delete-btn">Delete</button>
    </span>
  </div>
})
}
</div>
</div>
);
}
}
export default App;