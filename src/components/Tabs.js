import React, { useState,createContext, useContext} from 'react'

const TabsContext = createContext(null);

const Tabs = ({children}) => {
    
    const [activeTab, setActiveTab] = useState(0);

    return (
    <TabsContext.Provider value = {{activeTab, setActiveTab}}>
      <>
          {children}
          </>
    </TabsContext.Provider>
    )
  }

  const Tabpanels = ({children}) => {
    
    return (
      <>
          {children}
          </>
    )
  }

  const Tabpanel = ({children}) => {

    // console.log(child.props)

    const tabs_context = useContext(TabsContext);

    const index = React.Children.toArray(children).findIndex(
        (child) => child.props.children === children
      );

      console.log(index)

    return (
        <>
    { tabs_context.activeTab === index &&
     
          {children}
      
      
    }
    </>
    )
  }

const Tablist = ({children}) => {


  return (
    <div className='flex justify-end'>
        {children}
        </div>
  )
}

const Tab = ({children}) => {

  const 

    console.log(children)

    const index = 0

    const tabs_context = useContext(TabsContext);
    return (
      <div className={`p-2 ${tabs_context.activeTab===index?"text-blue-500":""}`} onClick={()=>tabs_context.setActiveTab(index)}>{children}</div>
    )
  }

const TabIndicator = () => {
    return (
        <div className='w-[100px] h-[10px] bg-blue-500'></div>
    )
}

export {Tabs,Tab,Tablist,Tabpanels,Tabpanel,TabIndicator}