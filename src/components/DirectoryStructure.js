import React, { useEffect, useState,useRef } from "react";
import { FaFile } from "react-icons/fa";
import { FaFolderClosed } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const DirectoryStructure = ({ root, className,insertNode,deleteNode,renameNode }) => {
  const [open, setOpen] = useState(true);
  const [inputDisplay,setInputDisplay] = useState(false);
  const inputRef = useRef(null);
  const [insertType,setInsertType] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputDisplay]);
  //console.log(tree.children);

  const handleInsert=(e,folder_id)=>{
    if(e.target.value===""){
        setInputDisplay(false);
        setInsertType(null);
        return;
    }
    console.log("inserting");
    insertNode()

    
  }

  return (
    <div className={`ms-3 ${className}`}>
      <div
        className="flex justify-between border-2 border-black-500 items-center px-2"
        key={root.id}
      >
        {root.isFolder &&
          (open ? (
            <MdKeyboardArrowDown onClick={() => setOpen(!open)} />
          ) : (
            <MdKeyboardArrowRight onClick={() => setOpen(!open)} />
          ))}
        <div>{root.name}</div>
        {root.isFolder && (
          <div className="flex gap-3">
            <FaFile onClick={()=>{
                setInputDisplay(true)
            }}/>
            <FaFolderClosed onClick={()=>{
                setInputDisplay(true)
                }}/>
          </div>
        )}
      </div>
      <input type="text" ref={inputRef} className={`mx-auto w-full ${inputDisplay?"flex":"hidden"}`} onBlur={(e)=>{handleInsert(e,root.id)}}/>
      {root.children &&
        root.children.map((child) => (
          <DirectoryStructure
            key={child.id}
            root={child}
            className={`${open === true ? "block" : "hidden"}`}
          />
        ))}
    </div>
  );
};

export default DirectoryStructure;
