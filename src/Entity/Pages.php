<?php

namespace App\Entity;

use App\Repository\PagesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PagesRepository::class)]
class Pages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'text')]
    private $presentation;

    #[ORM\Column(type: 'string', length: 255)]
    private $networks;

    #[ORM\OneToOne(inversedBy: 'page', targetEntity: Users::class, cascade: ['persist', 'remove'])]
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPresentation(): ?string
    {
        return $this->presentation;
    }

    public function setPresentation(string $presentation): self
    {
        $this->presentation = $presentation;

        return $this;
    }

    public function getNetworks(): ?string
    {
        return $this->networks;
    }

    public function setNetworks(string $networks): self
    {
        $this->networks = $networks;

        return $this;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): self
    {
        $this->user = $user;

        return $this;
    }
}
