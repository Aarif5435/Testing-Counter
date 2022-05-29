

import { Button } from "./AddButtton";
import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App";

describe("Count Button Test", function(){
    it("should have button in dom",function(){
        render(<Button>Add Count</Button>);
        let button = screen.getByTestId("addBtn");
        expect(button).toBeInTheDocument();
    });

    it("should have add  button", function(){
        render(<App></App>);
        let AddBtn = screen.getByText("Add Count");
        
        expect(AddBtn).toBeInTheDocument();
        
    });

    it("should have reduce  button", function(){
        render(<App></App>);
        
        let RedBtn = screen.getByText("Reduce Count");
       
        expect(RedBtn).toBeInTheDocument();
    });

    it("shold have element with defauld 0", function(){
        render(<App></App>);

        let h3 = screen.getByText("Count is 0");
        expect(h3).toHaveTextContent("0");

       

       
    });

    it("should increment the count by 5",function(){
        render(<App></App>);

        let h3 = screen.getByText("Count is 0");
        expect(h3).toHaveTextContent("0");

        let AddBtn = screen.getByText("Add Count");
        fireEvent.click(AddBtn);
        expect(h3).toHaveTextContent("5");
        
    });

    it("should decrement the count by 5",function(){
        render(<App></App>);

        let h3 = screen.getByText("Count is 0");
        expect(h3).toHaveTextContent("0");

        let RedBtn = screen.getByText("Reduce Count");
        fireEvent.click(RedBtn);
        expect(h3).toHaveTextContent("-5")
        
    })
})