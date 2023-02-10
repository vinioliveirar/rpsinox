import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { List } from "phosphor-react";

export function NavbarMobile() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<List size={24} />}
        color="white"
        bg="gray.800"
      />
      <MenuList bg="gray.700">
        <MenuItem bg="gray.700" color="white" padding="20px 10px">
          Serviços
        </MenuItem>
        <MenuItem bg="gray.700" color="white" padding="20px 10px">
          Projetos
        </MenuItem>
        <MenuItem bg="gray.700" color="white" padding="20px 10px">
          Fale Conosco
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
